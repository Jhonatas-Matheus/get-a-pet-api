const bcrypt = require("bcrypt");
const User = require("../models/User");

class UserRegisterService {
  static async execute({ name, phone, email, password, confirmPassword }) {
    if (!name || !phone || !email || !password || !confirmPassword) {
      return [422, { message: "Please fill in all required fields." }];
    }
    if (password !== confirmPassword) {
      return [422, { message: "Passwords don't match." }];
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return [400, { message: "User already exists." }];
    }
    const passwordGenerate = await bcrypt.hash(password, 9);
    const user = new User({
      name,
      email,
      phone,
      password: passwordGenerate,
    });
    try {
      await user.save();
      const displayUser = {
        name,
        email,
        phone,
      };
      return [201, displayUser];
    } catch (error) {
      return [500, { message: error }];
    }
  }
}

module.exports = UserRegisterService;
