module.exports = (app) => {
  const userService = require("../services/user-service");

  app.get("/user", async (req, res) => {
    res.send(await userService.findAll());
  });

  app.get("/user/:id", async (req, res) => {
    res.send(await userService.findOneById(req.params.id));
  });

};
