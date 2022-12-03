const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/getapet");
  console.log("O banco conectou");
};
main().catch((error) => console.log(error));

module.exports = mongoose;
