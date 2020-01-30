const auth = require("../middleware/auth.middleware");

module.exports = app => {
  const relationshipService = require("../services/relationship-service");

  /**
   * @api {get} /relationship/ Get All Relationship
   * @apiGroup Relationship
   * @apiDescription Get all relationship from the current user
   * 
   * @apiHeader Authorization JWT Token with the id user
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} name
   * @apiSuccess {Object} user
   * @apiSuccess {Number} user.id
   * @apiSuccess {String} user.name
   */
  app.get("/relationship", auth.isAuthenticated, async (req, res, next) => {
    try {
      res.send(await relationshipService.findAllForUser(req.params.userId));
    } catch (e) {
      next(e);
    }
  });

  // TODO user can only read it's own relationship
  /**
   * @api {get} /relationship/:id Get One Relationship
   * @apiGroup Relationship
   * @apiDescription Get one relationship by id from the current user
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
   * @api {post} /relationship/ Post Relationship
   * @apiGroup Relationship
   * @apiDescription Create a new relationship
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
