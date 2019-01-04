const Joi = require('joi');

const ingredientsResponseSchema = Joi.array()
    .items(Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string().required()
    }).label('ingredient'))
    .required()
    .label('ingredients');

const measuredIngredientResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    amount: Joi.number(),
    unit_of_measurement: Joi.string()
}).label('measuredIngredient');

const measuredIngredientsListResponseSchema = Joi.array().items(measuredIngredientResponseSchema)
    .label('measuredIngredientsList');

module.exports = {
    ingredientsResponseSchema: ingredientsResponseSchema,
    measuredIngredientResponseSchema: measuredIngredientResponseSchema,
    measuredIngredientsListResponseSchema: measuredIngredientsListResponseSchema
};
