const express = require("express");
const routeUser = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use("/user", routeUser);
app.listen(2580);

module.exports = app;
