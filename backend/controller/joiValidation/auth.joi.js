const Joi=require('joi')

const signUpValidation=Joi.object({
  fullName:Joi.string().min(4).max(30).required(),
  email:Joi.string().email().required(),
  password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  phone:Joi.string().length(10).pattern(/^[0-9]+$/)
})

const loginValidation=Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

module.exports={signUpValidation,loginValidation}