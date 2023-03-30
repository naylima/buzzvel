import { Prisma } from "@prisma/client";
import Joi from "joi";

export const createUserSchema = Joi.object<Prisma.UserCreateInput>({
  username: Joi.string().required(),
  linkedin: Joi.string().uri().required(),
  github: Joi.string().uri().required(),
});