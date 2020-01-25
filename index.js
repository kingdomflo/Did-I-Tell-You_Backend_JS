const http = require("http");
require("dotenv").config();
const env = process.env;
const express = require("express");
const bodyParser = require("body-parser");

const port = 8100;
const ip = "127.3.12.37";

const db = require("./src/models");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const userController = require("./src/controllers/user-controller");
const relationshipController = require("./src/controllers/relationship-controller");
const appController = require("./src/controllers/app-controller");

userController(app);
relationshipController(app);
appController(app);

app.use(function(err, req, res, next) {
  console.log("We have an error!");
  console.error(err);
  error = JSON.parse(err.message);
  console.log(error);
  res.status(error.status || 500).send(error);
});

app.listen(port, ip, function() { 
  console.log("Hello port number " + port + " and ip " + ip + " and in mode: " + process.argv.slice(2)[0]);
  if (process.argv.slice(2)[0] == "test") {
    db.sequelize.sync({ force: true }).then(() => {
      db.user.create({
        name: "Samy",
        email: "samy@gmail.com",
        authId: "googleO2|ellohdarmoc",
      });
      db.user.create({
        name: "Caribou",
        email: "caribou@norsk.no",
        authId: "auth02|aivanidnacs",
      });
      db.relationship.create({
        name: "Bambi",
        userId: 2
      });
    });
  } else {
    db.sequelize.sync();
  }
});

// app.listen(port, ip);
