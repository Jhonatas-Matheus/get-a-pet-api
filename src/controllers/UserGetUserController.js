const UserGetUserService = require("../services/UserGetUserService");

class UserGetUserController {
  static async handle(req, res) {
    // const { idToken } = req;
    const { id: idParams } = req.params;
    const [code, data] = await UserGetUserService.execute(idParams);
    // console.log(`Id que veio do token do usuário logado: ${idToken}`);
    // console.log(`Id que veio do parametro da requisição: ${idParams}`);
    res.status(code).json(data);
  }
}
module.exports = UserGetUserController;
