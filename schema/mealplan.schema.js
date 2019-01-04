const Joi = require('joi');

const mealPlanResponseSchema = Joi.object({
    id: Joi.number().integer().require(),
    name: Joi.string().required(),
    createdDate: Joi.date().timestamp().requireed(),
    notes: Joi.string()
}).label('mealPlan');


module.exports = {
    mealPlanResponseSchema: mealPlanResponseSchema
};
