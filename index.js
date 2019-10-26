var http = require("http");
require('dotenv').config();
const env = process.env;
const express = require("express");
const app = express();

const port = 8100;
const ip = "127.2.249.120";

const Sequelize = require("sequelize");
const Model = Sequelize.Model;

const sequelize = new Sequelize(
  env.DB_DATABASE,
  env.DB_USERNAME,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    dialect: env.DB_CONNECTION
  }
);

class User extends Model {}
User.init(
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: "user"
    // options
  }
);

app.listen(port, function() {
  console.log("Hello port number " + port);
  sequelize.sync();
});

app.get("/", async (req, res) => {
  res.send({ hello: "comrade" });
});

app.get("/ping", async (req, res) => {
  let result;
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      result = { hello: "comrade, it's succes" };
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
      result = { hello: "comrade, it's fail..." };
    });

  res.send(result);
});

app.get("/user", async (req, res) => {
  let result;
  await User.findAll().then(data => {
    console.log(data);
    result = data;
  });
  res.send(result);
});

app.get("/testAddUser", async (req, res) => {
  let result;
  let query = req.query;
  let name = query.name;

  await User.create({ name: name }).then(data => {
    result = data;
  });

  res.send(result);
});

app.listen(port, ip);
