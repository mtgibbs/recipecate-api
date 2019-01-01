const Joi = require('joi');

const ingredientResponseSchema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string(),
    amount: Joi.number(),
    unit_of_measurement: Joi.string()
}).label("ingredient");

const recipeResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string(),
    instructions: Joi.string(),
    ingredients: Joi.array().items(ingredientResponseSchema)
}).label("recipe");

const recipeListResponseSchema = Joi.object({
    count: Joi.number().integer(),
    items: Joi.array().items(new Joi.object({
        id: Joi.number().integer(),
        name: Joi.string()
    }))
}).label("recipePageResponse");

const ingredientRequestSchema = Joi.object({
    name: Joi.string().required(),
    amount: Joi.number().required().positive(),
    unit_of_measurement: Joi.string().lowercase().required()
}).label("ingredientRequest");

const recipeRequestSchema = Joi.object({
    name: Joi.string().max(200).required(),
    instructions: Joi.string().max(1000),
    ingredients: Joi.array().items(ingredientRequestSchema).min(1).required()
}).label("recipeRequest");

module.exports = {
    ingredientResponseSchema: ingredientResponseSchema,
    recipeResponseSchema: recipeResponseSchema,
    recipeListResponseSchema: recipeListResponseSchema,
    ingredientRequestSchema: ingredientRequestSchema,
    recipeRequestSchema: recipeRequestSchema
}
