module.exports = app => {
  const userService = require("../services/user-service");

  // TODO block the route
  /**
   * @api {get} /user/ Get all user
   * @apiGroup User
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} name
   * @apiSuccess {String} email 
   * @apiSuccess {Object[]} relationships All the relationship of the user
   * @apiSuccess {Number} relationships.id
   * @apiSuccess {String} relationships.name Name of the relationship
   */
  app.get("/user", async (req, res, next) => {
    try {
      res.send(await userService.findAll());
    } catch (e) {
      next(e);
    }
  });

  // TODO user can only read itself
  /**
   * @api {get} /user/:id Get one user by id
   * @apiGroup User
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} name
   * @apiSuccess {String} email 
   * @apiSuccess {Object[]} relationships All the relationship of the user
   * @apiSuccess {Number} relationships.id
   * @apiSuccess {String} relationships.name Name of the relationship
   */
  app.get("/user/:id", async (req, res, next) => {
    try {
      res.send(await userService.findOneById(req.params.id));
    } catch (e) {
      next(e);
    }
  });

  // TODO re open later with admin mode
  // app.post("/user", async (req, res, next) => {
  //   console.log(req);
  //   try {
  //     res.send(await userService.create(req.body));
  //   } catch (e) {
  //     next(e);
  //   }
  // });
};
