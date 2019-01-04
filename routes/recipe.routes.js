const recipeSchemas = require('../schema/recipe.schema');
const knex = require('../knex');
const Joi = require('joi');

const getRecipeRoute = {
    path: '/recipes',
    method: 'GET',
    options: {
        tags: ['api', 'recipes'],
        response: {
            schema: recipeSchemas.recipeListResponseSchema
        },
        cors: true
    },
    handler: async (request, h) => {
        const results = await knex('recipe').select('id', 'name');
        if (!results || results.length === 0) {
            return {
                count: 0,
                items: []
            };
        }
        return {
            count: results.length,
            items: results
        };
    }
};

const getRecipeDetailRoute = {
    path: '/recipes/{id}/detail',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'recipes'],
        validate: {
            params: {
                id: Joi.number().integer().required()
            }
        },
        response: {
            schema: recipeSchemas.recipeResponseSchema
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
            return h.response("Not Found").code(404);
        }

        return recipe;
    }
}

const addRecipePostRoute = {
    path: '/recipes/add',
    method: 'POST',
    options: {
        cors: true,
        tags: ['api', 'recipes'],
        validate: {
            payload: recipeSchemas.recipeRequestSchema
        }
    },
    handler: async (request, h) => {

        const recipeToAdd = request.payload;
        const recipeLookup = await knex('recipe').where({ name: recipeToAdd.name }).first();

        if (recipeLookup) {
            return h.response('Recipe with that name already exists').code(409);
        }

        let recipeId = 0;
        await knex.transaction(async (trx) => {

            try {
                recipeId = (await knex('recipe')
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

                await trx.commit();
            } catch (e) {
                console.error(e);
                await trx.rollback();
                throw e;
            }

        });

        return h.response({ recipeId: recipeId }).code(200);
    }
};

module.exports = [
    getRecipeRoute,
    getRecipeDetailRoute,
    addRecipePostRoute
];
