const jwt = require("jsonwebtoken");

const createUserToken = (user, req, res) => {
  const token = jwt.sign(
    {
      name: user.name,
    },
    "d7d538ddf2a9fc5d141d5b5fb2543e9d",
    { subject: user.id }
  );
  return token;
};

module.exports = createUserToken;
