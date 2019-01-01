
const Hapi = require('hapi');
const knex = require('./knex');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

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
            tags: ['api', 'recipes']
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

            const payload = request.payload;

            // just attempt to add all of the ingredients that they've got listed
            payload.ingredients.forEach(async i => {

                try {
                    const ingredientIdLookup = await knex('ingredient').where({ name: i.name }).select('id').first();
                    if (!ingredientIdLookup) {
                        i.id = (await knex('ingredient').insert({ name: i.name }).returning('id'))[0];
                    } else {
                        i.id = ingredientIdLookup.id;
                    }
                    console.log(i);
                } catch (e) { }
            });

            return h.response().code(200);
        }
    }
]);

// #endregion
