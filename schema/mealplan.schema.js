const Joi = require('joi');
const recipeSchemas = require('./recipe.schema');

const mealPlanResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    notes: Joi.string().allow(null),
    createdDate: Joi.date().required()
}).label('mealPlan');

const mealPlanListResponseSchema = Joi.array().items(mealPlanResponseSchema).label('mealPlans');

const mealPlanDetailsResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    createdDate: Joi.date().timestamp().required(),
    notes: Joi.string().allow(null),
    recipes: Joi.array().items(recipeSchemas.recipeListInfo).label('mealPlanRecipes')
}).label('mealPlanDetails');

const addMealPlanRequestSchema = Joi.object({
    name: Joi.string().required().max(200),
    notes: Joi.string().max(500),
    recipeIds: Joi.array().items(Joi.number().integer()).min(1)
}).label('addMealPlanRequest');

module.exports = {
    mealPlanResponseSchema: mealPlanResponseSchema,
    mealPlanListResponseSchema: mealPlanListResponseSchema,
    mealPlanDetailsResponseSchema: mealPlanDetailsResponseSchema,
    addMealPlanRequestSchema: addMealPlanRequestSchema
};
