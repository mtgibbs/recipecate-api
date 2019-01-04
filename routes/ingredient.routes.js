const ingredientSchemas = require('../schema/ingredient.schema');
const knex = require('../knex');

const getIngredientsRoute = {
    path: '/ingredients',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'ingredients'],
        response: {
            schema: ingredientSchemas.ingredientsResponseSchema
        }
    },
    handler: async (request, h) => {
        const ingredients = await knex('ingredient').select('id', 'name');
        return ingredients;
    }
};

module.exports = [
    getIngredientsRoute
];
