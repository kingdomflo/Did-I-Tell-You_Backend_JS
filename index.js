const http = require("http");
require("dotenv").config();
const env = process.env;
const express = require("express");
const bodyParser = require("body-parser");

const port = 8100;
const ip = "127.2.249.120";

const db = require("./src/models");

const app = express();
app.use(bodyParser.json());

const appController = require("./src/controllers/app-controller");
const userController = require("./src/controllers/user-controller");

appController(app, db);
userController(app, db);

app.listen(port, function() {
  console.log("Hello port number " + port);
  db.sequelize.sync();
});

app.listen(port, ip);
