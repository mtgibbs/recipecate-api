
const mealPlanSchema = require('../schema/mealplan.schema');
const ingredientSchemas = require('../schema/ingredient.schema');
const knex = require('../knex');

const getMealPlansRoute = {
    path: '/mealplan',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'mealplan'],
        response: {
            schema: mealPlanSchema.mealPlanListResponseSchema
        }
    },
    handler: async (request, h) => {
        return await knex('mealplan').select('id', 'name', 'created_date');
    }
};

const getMealPlansDetailsRoute = {
    path: '/mealplan/{id}/detail',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'mealplan'],
        response: {
            schema: mealPlanSchema.mealPlanDetailsResponseSchema
        }
    },
    handler: async (request, h) => {

        const mpId = parseInt(request.params.id);

        const mealPlan = await knex('mealplan')
            .select('id', 'name', 'created_date', 'notes')
            .where({ 'id': mpId })
            .first();

        if (!mealPlan) {
            return h.response("Not Found").code(404);
        }

        const recipes = await knex('recipe')
            .join('meal_plan_recipe', { 'recipe.id': 'meal_plan_recipe.recipe_id' })
            .where({ 'meal_plan_recipe.meal_plan_id': mpId })
            .select([
                'recipe_id as id',
                'name',
                'instructions'
            ]);

        return {
            id: mealPlan.id,
            name: mealPlan.name,
            createdDate: mealPlan.created_date,
            notes: notes,
            recipes: recipes
        };
    }
};

const getIngredientsForMealPlan = {
    path: '/mealplan/{id}/shoppinglist',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'mealplan'],
        response: {
            schema: ingredientSchemas.measuredIngredientsListResponseSchema
        }
    },
    handler: async (request, h) => {

        const mpId = parseInt(request.params.id);
        const ingredients = await knex('ingredient')
            .join('shopping_list', { 'ingredient.id': 'shopping_list.ingredient_id' })
            .where({ 'shopping_list.meal_plan_id': mpId })
            .select([
                'ingredient_id as id',
                'name',
                'amount',
                'unit_of_measurement'
            ]);

        if (!ingredients || ingredients.length === 0) {
            return h.response("Not Found").code(404);
        }

        return ingredients;
    }
}

module.exports = [
    getMealPlansRoute,
    getIngredientsForMealPlan,
    getMealPlansDetailsRoute
];
