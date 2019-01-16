const Joi = require('joi');
const ingredientSchemas = require('./ingredient.schema');

const ingredientResponseSchema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string(),
    amount: Joi.number(),
    unitOfMeasurement: ingredientSchemas.unitOfMeasurement.required()
}).label("recipeIngredientDetail");

const recipeResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string(),
    instructions: Joi.string(),
    ingredients: Joi.array().items(ingredientResponseSchema).label('ingredientDetails')
}).label("recipe");

const recipeListInfo = new Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    instructions: Joi.string()
}).label("recipeListItem");

const recipeListResponseSchema = Joi.object({
    count: Joi.number().integer(),
    items: Joi.array().items(recipeListInfo)
}).label("recipePageResponse");

const ingredientRequestSchema = Joi.object({
    name: Joi.string().required(),
    amount: Joi.number().required().positive(),
    unitOfMeasurement: ingredientSchemas.unitOfMeasurement.required()
}).label("ingredientRequest");

const recipeRequestSchema = Joi.object({
    name: Joi.string().max(200).required(),
    instructions: Joi.string().max(1000),
    ingredients: Joi.array().min(1).required().items(ingredientRequestSchema).label('ingredientRequests')
}).label("recipeRequest");

module.exports = {
    ingredientResponseSchema: ingredientResponseSchema,
    recipeResponseSchema: recipeResponseSchema,
    recipeListResponseSchema: recipeListResponseSchema,
    ingredientRequestSchema: ingredientRequestSchema,
    recipeRequestSchema: recipeRequestSchema,
    recipeListInfo: recipeListInfo
}
