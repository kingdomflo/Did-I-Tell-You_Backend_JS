module.exports = app => {
  const userService = require("../services/user-service");

  app.get("/user", async (req, res, next) => {
    try {
      res.send(await userService.findAll());
    } catch (e) {
      next(e);
    }
  });

  app.get("/user/:id", async (req, res, next) => {
    try {
      res.send(await userService.findOneById(req.params.id));
    } catch (e) {
      next(e);
    }
  });
};
