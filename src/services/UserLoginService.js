const bcrypt = require("bcrypt");
const createUserToken = require("../helpers/create-user-token");
const User = require("../models/User");

class UserLoginService {
  static async execute({ email, password }) {
    if (!email) {
      return [400, { message: "The email field is requeried." }];
    }
    if (!password) {
      return [400, { message: "The password field is requeried." }];
    }
    const userToBeAuthenticated = await User.findOne({ email });
    if (!userToBeAuthenticated) {
      return [401, { message: "Invalid email or password." }];
    }
    const verifyPassword = await bcrypt.compare(
      password,
      userToBeAuthenticated.password
    );
    if (!verifyPassword) {
      return [401, { message: "Invalid email or password." }];
    }
    return [
      200,
      {
        message: "User authenticated",
        token: createUserToken(userToBeAuthenticated),
      },
    ];
  }
}
module.exports = UserLoginService;
