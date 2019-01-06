const ingredientSchemas = require('../schema/ingredient.schema');
const knex = require('../knex');
const Joi = require('joi');

const getIngredientsRoute = {
    path: '/ingredients',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'ingredients'],
        response: {
            schema: ingredientSchemas.ingredientsResponseSchema
        },
        validate: {
            query: {
                recipeId: Joi.array()
                    .items(Joi.number().integer().min(1))
                    .optional()
                    .single()
            }
        }
    },
    handler: async (request, h) => {

        const params = request.query;

        let queryResults;

        if (params.recipeId && params.recipeId.length) {

            queryResults = await knex('ingredient')
                .join('recipes_ingredients', { 'ingredient.id': 'recipes_ingredients.ingredient_id' })
                .whereIn('recipes_ingredients.recipe_id', params.recipeId)
                .select([
                    'ingredient_id as id',
                    'recipe_id',
                    'name',
                    'amount',
                    'unit_of_measurement'
                ]);
        } else {
            queryResults = await knex('ingredient').select('id', 'name');
        }

        // if (!queryResults || queryResults.length === 0) {
        //     return h.response("Not Found").code(404);
        // }

        const ingredients = queryResults.map(ingredient => {
            return {
                id: ingredient.id,
                recipeId: ingredient.recipe_id,
                name: ingredient.name,
                amount: ingredient.amount,
                unitOfMeasurement: ingredient.unit_of_measurement
            };
        });

        return ingredients;
    }
};

module.exports = [
    getIngredientsRoute
];
