const User = require("../models/User");

class UserGetUserService {
  static async execute(id) {
    const { _doc: currentUser } = await User.findById({ _id: id });
    delete currentUser.password;
    console.log(currentUser);
    return [200, currentUser];
  }
}
module.exports = UserGetUserService;
