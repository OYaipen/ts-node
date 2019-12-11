import Joi from '@hapi/joi';
import { IUser } from '../models/User'
import t from '../config/i18n';
export const signupValidation = (data: IUser) => {
    const userSchema = Joi.object({
        username: Joi.string().min(4).max(30).required().messages({
            "string.base": ` should be a type of 'text'`,
            "string.empty": `${t.__('username_name_is_requerido')}`,
            "string.min": `${t.__('username should have a minimum length of')} {#limit}`,
            "string.max": `${t.__('username should have a maximum length of')} {#limit}`,
            "any.required": `${t.__('username_is_required_field')}`
        }),
        email: Joi.string().required(),
        password: Joi.string().min(6).required()
    });
    return userSchema.validate(data);
};

export const signinValidation = (data: IUser) => {
    const userSchema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().min(6).required()
    });
    return userSchema.validate(data);
};