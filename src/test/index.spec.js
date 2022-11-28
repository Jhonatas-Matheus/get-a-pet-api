const request = require("supertest");
const index = require("../index");

describe("Testando rota de get", () => {
  test("Primeiro retorno", async () => {
    const response = await request(index).get("/user");
    expect(response.status).toEqual(200);
  });
});
