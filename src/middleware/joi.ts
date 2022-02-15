import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";
import { InewUser } from "../interfaces/user";

// regEx string for password
const passReg =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

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
  user: Joi.object<InewUser>({
    username: Joi.string().alphanum().max(15).required(),
    password: Joi.string().pattern(new RegExp(passReg)).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    image: Joi.string().required(),
  }),
};
