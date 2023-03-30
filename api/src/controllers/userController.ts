import userService from "../services/userService";
import { Request, Response } from "express";

async function createUser(req: Request, res: Response) {
  const { username, linkedin, github } = req.body;

  try {
    const user = await userService.createUser({ username, linkedin, github });

    return res.status(201).send(user);
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send(error);
    }

    return res.status(500).send(error);
  }
}

async function getUser(req: Request, res: Response) {
  const { username } = req.params;

  try {
    const user = await userService.findUserByUsername(username);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}

const userController= {
  createUser,
  getUser
};

export default userController;