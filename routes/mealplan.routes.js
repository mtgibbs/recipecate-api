
const mealPlanSchemas = require('../schema/mealplan.schema');
const ingredientSchemas = require('../schema/ingredient.schema');
const knex = require('../knex');
const Joi = require('joi');

const getMealPlansRoute = {
    path: '/mealplan',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'mealplan'],
        response: {
            schema: mealPlanSchemas.mealPlanListResponseSchema
        }
    },
    handler: async (request, h) => {

        try {
            let result = await knex('meal_plan')
                .select('id', 'name', 'notes', 'created_at as createdDate')
                .orderBy('id', 'desc');

            if (!result || result.length === 0) {
                return [];
            }

            return result;

        } catch (e) {
            console.error(e);
            throw e;
        }
    }
};

const addMealPlanRoute =
{
    path: '/mealplan/add',
    method: 'POST',
    options: {
        cors: true,
        tags: ['api', 'mealplan'],
        validate: {
            payload: mealPlanSchemas.addMealPlanRequestSchema
        }
    },
    handler: async (request, h) => {
        const mealPlanToAdd = request.payload;

        let mpId = 0;
        await knex.transaction(async (trx) => {

            try {
                mpId = (await knex('meal_plan')
                    .transacting(trx)
                    .insert({
                        name: mealPlanToAdd.name,
                        notes: mealPlanToAdd.notes
                    })
                    .returning('id'))[0];

                const rows = mealPlanToAdd.recipeIds.map(recipeId => {
                    return {
                        meal_plan_id: mpId,
                        recipe_id: recipeId
                    };
                });

                await knex.batchInsert('meal_plan_recipe', rows, 50).transacting(trx);
                await trx.commit();

            } catch (e) {
                console.error(e);
                await trx.rollback();
                throw e;
            }
        });

        return h.response({ mealPlanId: mpId }).code(200);
    }
};

const getMealPlansDetailsRoute = {
    path: '/mealplan/{id}/detail',
    method: 'GET',
    options: {
        cors: true,
        tags: ['api', 'mealplan'],
        response: {
            schema: mealPlanSchemas.mealPlanDetailsResponseSchema
        },
        validate: {
            params: {
                id: Joi.number().integer().required()
            }
        }
    },
    handler: async (request, h) => {

        try {
            const mpId = parseInt(request.params.id);

            const mealPlan = await knex('meal_plan')
                .select('id', 'name', 'created_at', 'notes')
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
                createdDate: mealPlan.created_at,
                notes: mealPlan.notes,
                recipes: recipes
            };
        }
        catch (e) {
            console.error(e);
            throw e;
        }
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
        },
        validate: {
            params: {
                id: Joi.number().integer().required()
            }
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
};

module.exports = [
    getMealPlansRoute,
    getMealPlansDetailsRoute,
    getIngredientsForMealPlan,
    addMealPlanRoute
];
