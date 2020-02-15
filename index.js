const http = require("http");
require("dotenv").config();
const env = process.env;
const express = require("express");
const bodyParser = require("body-parser");

const port = 8100;
const ip = env.ALWAYSDATA_HTTPD_IP;

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
const storyController = require("./src/controllers/story-controller")
const appController = require("./src/controllers/app-controller");

userController(app);
relationshipController(app);
storyController(app);
appController(app);

app.use(function (err, req, res, next) {
  console.log("We have an error!");
  console.error(err);
  error = JSON.parse(err.message);
  console.log(error);
  res.status(error.status || 500).send(error);
});

app.listen(port, ip, function () {
  console.log("Hello port number " + port + " and ip " + ip + " and in mode: " + process.argv.slice(2)[0]);

  // always init the db when we are in test or dev mode
  if (process.argv.slice(2)[0] == "test" || process.argv.slice(2)[0] == "dev") {
    db.sequelize.sync({ force: true }).then(async () => {
      await db.user.create({
        name: "Samy",
        email: "samy@gmail.com",
        authId: "googleO2|ellohdarmoc",
      });
      await db.user.create({
        name: "Caribou",
        email: "caribou@norsk.no",
        authId: "auth02|aivanidnacs",
      });
      const relationshipKing = await db.relationship.create({
        name: "King",
        userId: 1
      });
      const relationshipBambi = await db.relationship.create({
        name: "Bambi",
        userId: 2
      });
      const relationshipQueen = await db.relationship.create({
        name: "Queen",
        userId: 2
      });
      const relationshipKaiser = await db.relationship.create({
        name: "Kaiser",
        userId: 2
      });
      const story = await db.story.create({
        text: "Vim tips",
        userId: 1,
      });
      const storyOne = await db.story.create({
        text: "YT Joke",
        userId: 2,
      });
      await storyOne.addRelationships([relationshipBambi, relationshipQueen]);

      console.log('db init is ok');
    });

  } else {
    db.sequelize.sync();
  }
});

// app.listen(port, ip);
