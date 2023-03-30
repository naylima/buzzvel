import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";

async function findByUsername(username: string) {
  return prisma.user.findUnique({
    where: {
      username
    }
  })
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data
  })
}

const userRepository = {
  findByUsername,
  create,
};

export default userRepository;