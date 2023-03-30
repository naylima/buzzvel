import userController from "../controllers/userController";
import { validateBody } from "../middlewares/validation-middleware";
import { createUserSchema } from "../schemas/users-schemas";
import { Router } from "express";

const userRouter = Router();

userRouter
  .get("/:username", userController.getUser)
  .post("/", validateBody(createUserSchema), userController.createUser);

export { userRouter };