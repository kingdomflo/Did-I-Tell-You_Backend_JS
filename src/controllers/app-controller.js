const db = require("../models");

module.exports = app => {
  app.get("/", async (req, res) => {
    res.send({ hello: "comrade" });
  });

  app.get("/ping", async (req, res) => {
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
};
