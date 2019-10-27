const http = require("http");
require("dotenv").config();
const env = process.env;
const express = require("express");
const bodyParser = require("body-parser");

const port = 8100;
const ip = "127.2.249.120";

const db = require("./src/models");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

const userController = require("./src/controllers/user-controller");
const appController = require("./src/controllers/app-controller");

userController(app);
appController(app);

app.use(function (err, req, res, next) {
  console.log("We have an error!");
  console.error(err);
  error = JSON.parse(err.message);
  console.log(error);
  res.status(error.status || 500).send(error);
})

app.listen(port, function() {
  console.log("Hello port number " + port);
  db.sequelize.sync();
});

app.listen(port, ip);
