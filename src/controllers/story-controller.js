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

  /**
   * @api {put} /story/:id Modify One Story
   * @apiGroup Story
   * @apiDescription Modify one story
   * 
   * @apiHeader Authorization JWT Token with the id user
   * 
   * @apiParam {String} text Text that describe the new story 
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
  app.put("/story/:id", auth.isAuthenticated, storyValidator.storyValidationRules(), validator.validate, async (req, res, next) => {
    try {
      res.send(await storyService.updateForUser(req));
    } catch (e) {
      next(e);
    }
  });

  /**
   * @api {delete} /story/:id Delete Story
   * @apiGroup Story
   * @apiDescription Delete a story
   */
  app.delete("/story/:id", auth.isAuthenticated, async (req, res, next) => {
    try {
      res.send(await storyService.deleteForUser(req));
    } catch (e) {
      next(e);
    }
  });

  /**
   * @api {post} /story/:id/relationships Add relationships to one story
   * @apiGroup Story
   * @apiDescription Add one or more relationships to the story id
   * 
   * @apiHeader Authorization JWT Token with the id user
   * 
   * @apiParam {Object[]}  Array Array of new relationship who we have tell the story
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
  app.post("/story/:id/relationships", auth.isAuthenticated, async (req, res, next) => {
    try {
      res.send(await storyService.addRelationshipsToStory(req));
    } catch (e) {
      next(e);
    }
  });

  /**
   * @api {delete} /story/:id/relationship/:relationshipId Delete a relationships from one story
   * @apiGroup Story
   * @apiDescription Remove one relationships to the story id
   * 
   * @apiHeader Authorization JWT Token with the id user   
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
  app.delete("/story/:id/relationship/:relationshipId", auth.isAuthenticated, async (req, res, next) => {
    try {
      res.send(await storyService.removeRelationshipToStory(req));
    } catch (e) {
      next(e);
    }
  });

};
