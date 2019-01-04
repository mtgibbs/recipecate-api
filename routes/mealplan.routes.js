
const mealPlanSchema = require('../schema/mealplan.schema');
const knex = require('../knex');

const getMealPlansRoute = {
    path: '/mealplan',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'mealplan'],
        response: {
            schema: null // todo
        }
    },
    handler: async (request, h) => {
        return await knex('mealplan').select('id', 'name', 'created_date');
    }
};



module.exports = [
    getMealPlansRoute
];
