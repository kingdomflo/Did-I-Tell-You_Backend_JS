const auth = require("../middleware/auth.middleware");
const validator = require("../validators/validator");
const storyValidator = require("../validators/story.validator");

module.exports = app => {
  const storyService = require("../services/story-service");

  /**
   * @api {get} /story/ Get All Story
   * @apiGroup Story
   * @apiDescription Get all the story from the current user
   * 
   * @apiHeader Authorization JWT Token with the id user
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} text
   * @apiSuccess {Object} user
   * @apiSuccess {Number} user.id
   * @apiSuccess {String} user.name
   * @apiSuccess {Object[]} relationship
   * @apiSuccess {Number} relationship.id
   * @apiSuccess {String} relationship.name
   */
  app.get("/story", auth.isAuthenticated, async (req, res, next) => {
    try {
      res.send(await storyService.findAllForUser(req.params.userId));
    } catch (e) {
      next(e);
    }
  });

  /**
   * @api {get} /story/:id Get One Story
   * @apiGroup Story
   * @apiDescription Get one story by id from the current user
   * 
   * @apiHeader Authorization JWT Token with the id user
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} text
   * @apiSuccess {Object} user
   * @apiSuccess {Number} user.id
   * @apiSuccess {String} user.name
   * @apiSuccess {Object[]} relationship
   * @apiSuccess {Number} relationship.id
   * @apiSuccess {String} relationship.name
   */
  app.get("/story/:id", auth.isAuthenticated, async (req, res, next) => {
    try {
      res.send(await storyService.findOneByIdForUser(req.params.id, req.params.userId));
    } catch (e) {
      next(e);
    }
  });

  /**
   * @api {post} /story/ Create One Story
   * @apiGroup Story
   * @apiDescription Create one story by id from the current user
   * 
   * @apiHeader Authorization JWT Token with the id user
   * 
   * @apiParam {String} text Text that describe the new story
   * @apiParam {Object[]} relationship Array of relationship who we have tell the story
   * @apiParam {Number} relationship.id id of the relationship     
   *
   * @apiSuccess {Number} id
   * @apiSuccess {String} text
   * @apiSuccess {Object} user
   * @apiSuccess {Number} user.id
   * @apiSuccess {String} user.name
   * @apiSuccess {Object[]} relationships
   * @apiSuccess {Number} relationship.id
   * @apiSuccess {String} relationship.name
   */
  app.post("/story/", auth.isAuthenticated, storyValidator.storyValidationRules(), validator.validate, async (req, res, next) => {
    try {
      res.send(await storyService.createStory(req));
    } catch (e) {
      next(e);
    }
  });

};
