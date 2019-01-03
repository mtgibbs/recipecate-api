const Joi = require('joi');

const ingredientsResponseSchema = Joi.array()
    .items(Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string().required()
    }).label('ingredient'))
    .required()
    .label('ingredients');

module.exports = {
    ingredientsResponseSchema: ingredientsResponseSchema
};
