const UserLoginService = require("../services/UserLoginService");

class UserLoginController {
  static async handle(req, res) {
    const { email, password } = req.body;
    const [code, data] = await UserLoginService.execute({ email, password });
    res.status(code).json(data);
  }
}
module.exports = UserLoginController;
