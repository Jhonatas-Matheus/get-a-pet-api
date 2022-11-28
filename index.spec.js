const supertest = require("supertest");
const sum = require("./src/index");

const { request } = supertest();
test("Função de soma", () => {
  const result = sum(5, 10);
  expect(result).toEqual(15);
});
