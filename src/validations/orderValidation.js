const Joi = require('joi');

const orderSchema = Joi.object({
    sandwich: Joi.string().required(),
    extra: Joi.array().items(Joi.string()).max(2),
});

module.exports = orderSchema;
