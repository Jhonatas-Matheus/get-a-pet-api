const express = require("express");
const cors = require("cors");
const routeUser = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use("/user", routeUser);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.static("public"));
app.listen(2580);

module.exports = app;
