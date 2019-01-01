
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');

const knex = require('./knex');


const server = new Hapi.Server({
    port: 8080,
    host: 'localhost'
});

const init = async () => {

    const swaggerOptions = {
        info: {
            title: 'Recipecate API Documentation',
            version: '0.0.1',
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

// #region Routes
server.route([
    {
        path: '/recipes',
        method: 'GET',
        options: {
            tags: ['api', 'recipes']
        },
        handler: async (request, h) => {
            const results = await knex.from('recipe').select('id', 'name');
            if (!results || results.length === 0) {
                return {
                    count: 0,
                    data: []
                };
            }
            return {
                count: results.length,
                data: results
            };
        }
    },
    {
        path: '/recipes/{id}',
        method: 'GET',
        options: {
            tags: ['api', 'recipes'],
            response: {
                schema: Joi.object({
                    id: Joi.number().integer().required(),
                    name: Joi.string(),
                    instructions: Joi.string(),
                    ingredients: Joi.array().items(
                        Joi.object({
                            id: Joi.number().integer(),
                            name: Joi.string(),
                            amount: Joi.number(),
                            unit_of_measurement: Joi.string()
                        })
                    )
                })
            }
        },
        handler: async (request, h) => {

            const recipeId = request.params.id;

            const recipe = await knex.from('recipe')
                .select('id', 'name', 'instructions')
                .where({ 'id': recipeId })
                .first()
                .then(async recipe => {
                    recipe.ingredients = await knex('ingredient')
                        .join('recipes_ingredients', { 'ingredient.id': 'recipes_ingredients.ingredient_id' })
                        .where({ 'recipes_ingredients.recipe_id': recipeId })
                        .select([
                            'ingredient_id as id',
                            'name',
                            'amount',
                            'unit_of_measurement'
                        ]);
                    return recipe;
                });

            if (!recipe) {
                return h.response(null).code(404);
            }

            return recipe;
        }
    },
    {
        path: '/recipes/add',
        method: 'POST',
        options: {
            tags: ['api', 'recipes']
        },
        handler: async (request, h) => {

            /* EXAMPLE PAYLOAD --- WHYYYYYYYY DIDNT I JUST USE TYPESCRIPT.....
                {
                    "name": "Hot Cocoa",
                    "instructions": "Mix it together....  Duh",
                    "ingredients": [
                        {
                            "id": 4,
                            "name": "Sugar",
                            "amount": 1.5,
                            "unit_of_measurement": "cup"
                        },
                        {
                            "id": 5,
                            "name": "Cocoa Powder",
                            "amount": 1,
                            "unit_of_measurement": "cup"
                        },
                        {
                            "id": 6,
                            "name": "Cayenne Pepper",
                            "amount": 1,
                            "unit_of_measurement": "tsp"
                        }
                    ]
                }
            */

            const recipeToAdd = request.payload;

            const recipeLookup = await knex('recipe').where({ name: recipeToAdd.name }).first();

            if (recipeLookup) {
                return h.response('Recipe with that name already exists').code(422);
            }

            await knex.transaction(async (trx) => {

                try {
                    const recipeId = (await knex('recipe')
                        .transacting(trx)
                        .insert({ name: recipeToAdd.name, instructions: recipeToAdd.instructions })
                        .returning('id'))[0];

                    for (const ingredient of recipeToAdd.ingredients) {
                        const ingredientIdLookup = await knex('ingredient').where({ name: ingredient.name }).select('id').first();
                        if (!ingredientIdLookup) {
                            ingredient.id = (await knex('ingredient').transacting(trx).insert({ name: ingredient.name }).returning('id'))[0];
                        } else {
                            ingredient.id = ingredientIdLookup.id;
                        }

                        await knex('recipes_ingredients')
                            .transacting(trx)
                            .insert({
                                amount: ingredient.amount,
                                unit_of_measurement: ingredient.unit_of_measurement,
                                recipe_id: recipeId,
                                ingredient_id: ingredient.id
                            });
                    }

                    trx.commit();
                } catch (e) {
                    console.error(e);
                    trx.rollback();
                }

            });

            return h.response().code(200);
        }
    }
]);

// #endregion
