const Router = require("express");
const RegisterUserController = require("../controllers/UserRegisterController");

const routes = Router();

routes.post("/register", (req, res) => RegisterUserController.handle(req, res));

module.exports = routes;
