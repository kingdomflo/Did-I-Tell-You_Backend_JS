module.exports = app => {
  const userService = require("../services/user-service");
  const auth = require("../middleware/auth.middleware");

  // TODO add a good token to verify we are from the good Auth0 Serivce
  /**
   * @api {post} /login/ Login
   * @apiGroup User
   * @apiDescription Create user if not already exist and then return a token with the id of the user
   * 
   * @apiHeader Authorization JWT Token from the Front-End to certif that's authorize
   * 
   * @apiParam {String} authId The id from Auth0 
   *
   * @apiSuccess {String} apiToken The token to use in Front-End to be Authenticated at each API call
   */
  app.post("/login", auth.isFromUs, async (req, res, next) => {
    try {
      res.send(await userService.login(req));
    } catch (e) {
      next(e);
    }
  });

  // TODO block the route
  /**
   * @api {get} /user/ Get All User
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
   * @api {get} /user/:id Get One User
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
