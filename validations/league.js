const Joi = require('joi');

const validation = (data) =>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        founder: Joi.array().items(Joi.string().required()),
        manager: Joi.array().items(Joi.string().required()),
        foundingDate: Joi.date().required(),
        phone: Joi.array().items(Joi.string().min(4).required()),
        colors: Joi.array().items(Joi.string().required(), Joi.string().required()),
        location: Joi.string().min(5).required(),
        email: Joi.string().required().email()
    });
    return schema.validate(data);
}

module.exports = validation;