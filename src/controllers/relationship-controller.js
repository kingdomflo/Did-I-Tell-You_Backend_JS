module.exports = app => {
  const relationshipService = require("../services/relationship-service");

  // TODO user can only read it's own relationship
  /**
   * @api {get} /relationship/ Get all relationship
   * @apiGroup Relationship
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} name
   * @apiSuccess {Object} user
   * @apiSuccess {Number} user.id
   * @apiSuccess {String} user.name
   */
  app.get("/relationship", async (req, res, next) => {
    try {
      res.send(await relationshipService.findAll());
    } catch (e) {
      next(e);
    }
  });

  // TODO user can only read it's own relationship
  /**
   * @api {get} /relationship/:id Get one relationship by id
   * @apiGroup Relationship
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} name
   * @apiSuccess {Object} user
   * @apiSuccess {Number} user.id
   * @apiSuccess {String} user.name
   */
  app.get("/relationship/:id", async (req, res, next) => {
    try {
      res.send(await relationshipService.findOneById(req.params.id));
    } catch (e) {
      next(e);
    }
  });

  // TODO user can only add relationship to itself
  /**
   * @api {post} /relationship/ Create a new relationship
   * @apiGroup Relationship
   *
   * @apiParam {String} name Name of the new relationship  
   * 
   * @apiSuccess {Number} id The new relationship Id
   */
  app.post("/relationship", async (req, res, next) => {
    try {
      res.send(await relationshipService.create(req.body));
    } catch (e) {
      next(e);
    }
  });
};
