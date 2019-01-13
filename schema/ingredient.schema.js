const Joi = require('joi');

const ingredientsResponseSchema = Joi.array()
    .items(Joi.object({
        id: Joi.number().integer().required(),
        recipeId: Joi.number().integer().allow(null),
        name: Joi.string().required(),
        unitOfMeasurement: Joi.string().allow(null),
        amount: Joi.number().allow(null)
    }).label('ingredient'))
    .required()
    .label('ingredients');

const measuredIngredientResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    amount: Joi.number(),
    unitOfMeasurement: Joi.string()
}).label('measuredIngredient');

const measuredIngredientsListResponseSchema = Joi.array().items(measuredIngredientResponseSchema)
    .label('measuredIngredientsList');

module.exports = {
    ingredientsResponseSchema: ingredientsResponseSchema,
    measuredIngredientResponseSchema: measuredIngredientResponseSchema,
    measuredIngredientsListResponseSchema: measuredIngredientsListResponseSchema
};
