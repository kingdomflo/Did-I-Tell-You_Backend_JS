module.exports = app => {
  const relationshipService = require("../services/relationship-service");

  app.get("/relationship", async (req, res, next) => {
    try {
      res.send(await relationshipService.findAll());
    } catch (e) {
      next(e);
    }
  });

  app.get("/relationship/:id", async (req, res, next) => {
    try {
      res.send(await relationshipService.findOneById(req.params.id));
    } catch (e) {
      next(e);
    }
  });

  app.post("/relationship", async (req, res, next) => {
    try {
      res.send(await relationshipService.create(req.body));
    } catch (e) {
      next(e);
    }
  });
};
