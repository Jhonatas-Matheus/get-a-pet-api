const UserRegisterService = require("../services/UserRegisterService");

class RegisterUserController {
  static async handle(req, res) {
    const { name, email, phone, password, confirmPassword } = req.body;
    const [code, data] = await UserRegisterService.execute({
      name,
      email,
      phone,
      password,
      confirmPassword,
    });
    res.status(code).json(data);
  }
}

module.exports = RegisterUserController;
