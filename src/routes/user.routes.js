const Router = require("express");
const TestGetController = require("../controllers/TesteGetController");

const routes = Router();

routes.get("/", (req, res) => TestGetController.handle(req, res));

module.exports = routes;
