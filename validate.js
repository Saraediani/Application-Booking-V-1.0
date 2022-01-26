const Joi = require('@hapi/joi')

const validationregister = (data) =>{

    const schema = {
        name: Joi.string()
        .min(3)
        .required(),
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required(),
        
    
    };
   return Joi.validate(data, schema)

}
const validationlogin = (data) =>{

    const schema = {
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required()
    
    };
   return Joi.validate(data, schema)

}


module.exports.validationregister = validationregister;
module.exports.validationlogin = validationlogin;
