import { Prisma, User } from "@prisma/client";
import { notFoundError, conflictError } from "../errors";
import userRepository from "../repositories/userRepository";

async function createUser(data: Prisma.UserCreateInput): Promise<User> { 
  const user =  await userRepository.findByUsername(data.username);
  if (user) throw conflictError();

  return await userRepository.create(data);
}

async function findUserByUsername(username: string): Promise<User> {
  const user = await userRepository.findByUsername(username);

  return user;
}

const userService= {
  createUser,
  findUserByUsername
};

export default userService;

