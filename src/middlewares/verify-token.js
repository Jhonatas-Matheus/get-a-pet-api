const jwt = require("jsonwebtoken");

const tokenVerify = async (req, res, next) => {
  const token = await req.headers.authorization;
  console.log(jwt.decode(await token.split(" ")[1]));
  const tokenInfos = jwt.decode(await token.split(" ")[1]);
  req.idToken = tokenInfos.sub;
  next();
};

module.exports = tokenVerify;
