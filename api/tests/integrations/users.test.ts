import supertest from "supertest";
import server from "../../src/server";
import { prisma } from "../../src/lib/prisma";
import { faker } from "@faker-js/faker";
import { createUser } from "../factories/users-factory";

const api = supertest(server);

beforeAll(async() => {
  await prisma.user.deleteMany({})
});

describe("POST /users", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await api.post("/users");

    expect(response.status).toBe(400);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await api.post("/users").send(invalidBody);

    expect(response.status).toBe(400);
  });

  describe("when body is valid", () => {
    const generateValidBody = () => ({
      username: faker.internet.userName(),
      linkedin: faker.internet.url(),
      github: faker.internet.url()
    });

    it("should respond with status 409 when there is an user with given username", async () => {
      const body = generateValidBody();
      await createUser(body);

      const response = await api.post("/users").send(body);

      expect(response.status).toBe(409);
    });

    it("should respond with status 201 and create user when given username is unique", async () => {
      const body = generateValidBody();

      const response = await api.post("/users").send(body);

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        id: expect.any(Number),
        username: body.username,
        linkedin: body.linkedin,
        github: body.github
      });
    });

  });    
});

describe("GET /users/:username", () => {
  it("should respond with empty object when username does not exist", async () => {
    const response = await api.get("/users/username");

    expect(response.body).toEqual({});
  });

  it("should respond with status 200 when username exists", async () => {
    const user = await createUser();

    const response = await api.get(`/users/${user.username}`); 

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: expect.any(Number),
      username: user.username,
      linkedin: user.linkedin,
      github: user.github
    });
  });    
});