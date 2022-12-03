const Router = require("express");
const UserGetUserController = require("../controllers/UserGetUserController");
const UserLoginController = require("../controllers/UserLoginController");
const RegisterUserController = require("../controllers/UserRegisterController");
const tokenVerify = require("../middlewares/verify-token");

const routes = Router();

routes.post("/register", (req, res) => RegisterUserController.handle(req, res));
routes.post("/login", (req, res) => UserLoginController.handle(req, res));
routes.use(tokenVerify);
routes.get("/:id", (req, res) => UserGetUserController.handle(req, res));
module.exports = routes;
