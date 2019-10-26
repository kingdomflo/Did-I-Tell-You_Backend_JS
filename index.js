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

const controllerApp = require("./src/controllers/app-controller");
const controllerUser = require("./src/controllers/user-controller");

controllerApp(app, db);
controllerUser(app, db);

app.listen(port, function() {
  console.log("Hello port number " + port);
  db.sequelize.sync();
});

app.listen(port, ip);
