module.exports = app => {
  const storyService = require("../services/story-service");

  app.get("/story", async (req, res, next) => {
    try {
      res.send(await storyService.findAll());
    } catch (e) {
      next(e);
    }
  });

  app.get("/story/:id", async (req, res, next) => {
    try {
      res.send(await storyService.findOneById(req.params.id));
    } catch (e) {
      next(e);
    }
  });

};
