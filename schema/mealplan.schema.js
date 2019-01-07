const Joi = require('joi');
const recipeSchemas = require('./recipe.schema');

const mealPlanResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    notes: Joi.string().allow(null, ''),
    createdDate: Joi.date().required()
}).label('mealPlan');

const mealPlanListResponseSchema = Joi.array().items(mealPlanResponseSchema).label('mealPlans');

const mealPlanDetailsResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    createdDate: Joi.date().required(),
    notes: Joi.string().allow(null),
    recipes: Joi.array().items(recipeSchemas.recipeListInfo).label('mealPlanRecipes')
}).label('mealPlanDetails');

const ingredientRequestSchema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string(),
    amount: Joi.number().required().positive(),
    unit_of_measurement: Joi.string().lowercase().required()
}).label("shoppingListIngredient");

const addMealPlanRequestSchema = Joi.object({
    name: Joi.string().required().max(200),
    notes: Joi.string().max(500).allow(null, ''),
    recipeIds: Joi.array().items(Joi.number().integer()).min(1),
    shoppingList: Joi.array().items(ingredientRequestSchema).allow(null).label('shoppingList')
}).label('addMealPlanRequest');

const addMealPlanResponseSchema = Joi.object({
    mealPlanId: Joi.number().integer().required()
}).label('addMealPlanResponse')

module.exports = {
    mealPlanResponseSchema: mealPlanResponseSchema,
    mealPlanListResponseSchema: mealPlanListResponseSchema,
    mealPlanDetailsResponseSchema: mealPlanDetailsResponseSchema,
    addMealPlanRequestSchema: addMealPlanRequestSchema,
    addMealPlanResponseSchema: addMealPlanResponseSchema
};
