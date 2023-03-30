import { faker }from "@faker-js/faker";
import { User } from "@prisma/client";
import { prisma } from "../../src/lib/prisma";

export async function createUser(params: Partial<User> = {}): Promise<User> {
  return prisma.user.create({
    data: {
      username: params.username || faker.internet.userName(),
      linkedin: params.linkedin || faker.internet.url(),
      github: params.github || faker.internet.url()
    },
  });
}