const db = require("../models");
const error = require("../tools/error");
const auth = require("../middleware/auth.middleware");

module.exports = app => {
  console.log('hello world');
  app.get("/", async (req, res) => {
    res.send({ hello: "comrade" });
  });

  app.get("/ping", async (req, res, next) => {
    let result;
    await db.sequelize
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

  app.use(function(req, res, next) {
    next(
      new Error(error.sendError(404, ['no routes']))
    );
  });
};
