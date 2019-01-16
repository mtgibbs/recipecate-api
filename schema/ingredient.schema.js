const Joi = require('joi');

const unitOfMeasurement = Joi.string().valid([
    'unit',
    'cup',
    'tsp',
    'tbs',
    'oz',
    'lb',
    'pint',
    'quart',
    'gallon'
]);

const unitsOfMeasurementResponse = Joi.array().items(unitOfMeasurement).label('unitsOfMeasurementList');

const ingredientsResponseSchema = Joi.array()
    .items(Joi.object({
        id: Joi.number().integer().required(),
        recipeId: Joi.number().integer().allow(null),
        name: Joi.string().required(),
        unitOfMeasurement: unitOfMeasurement.allow(null),
        amount: Joi.number().allow(null)
    }).label('ingredient'))
    .required()
    .label('ingredients');

const measuredIngredientResponseSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    amount: Joi.number(),
    unitOfMeasurement: unitOfMeasurement.required()
}).label('measuredIngredient');

const measuredIngredientsListResponseSchema = Joi.array().items(measuredIngredientResponseSchema)
    .label('measuredIngredientsList');

module.exports = {
    unitOfMeasurement: unitOfMeasurement,
    ingredientsResponseSchema: ingredientsResponseSchema,
    measuredIngredientResponseSchema: measuredIngredientResponseSchema,
    measuredIngredientsListResponseSchema: measuredIngredientsListResponseSchema,
    unitsOfMeasurementResponse: unitsOfMeasurementResponse
};
