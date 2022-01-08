const Joi = require('joi');

const validation = (data) =>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        location: Joi.string().min(5).required(),
        foundingDate: Joi.date().required(),
        email: Joi.string().required().email()
    });
    return schema.validate(data);
}

module.exports = validation;