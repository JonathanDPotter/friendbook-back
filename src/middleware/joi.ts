import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";
import { Ilogin } from "../interfaces/user";

// regEx string for password
// const passReg =
//   "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
// add next line to password to enforce the Regex
// .pattern(new RegExp(passReg))



export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      console.info(`Validating: ${req.body}`);
      next();
    } catch (error) {
      console.error(error);
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  login: Joi.object<Ilogin>({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required(),
  }),
};
