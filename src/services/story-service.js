const storyDb = require("../database/story-database");
const relationshipDb = require("../database/relationship-database");
const error = require("../tools/error");
const db = require("../models");

module.exports = {

  findAllForUser: async function (userId) {
    let result;
    await storyDb.findAllForUser(userId).then(data => {
      result = data;
    });
    return result;
  },

  findAll: async function () {
    let result;
    await storyDb.findAll().then(data => {
      result = data;
    });
    return result;
  },

  findOneByIdForUser: async function (pk, userId) {
    let result;
    await storyDb.findOneByIdForUser(pk, userId).then(data => {
      result = data;
    });
    if (result == null) {
      throw new Error(error.sendError(400, ["story not present"]));
    }
    return result;
  },

  findOneById: async function (pk) {
    let result;
    await storyDb.findOneById(pk).then(data => {
      result = data;
    });
    if (result == null) {
      throw new Error(error.sendError(400, ["story not present"]));
    }
    return result;
  },

  // TODO verify relationship belong to user?
  // TODO see if we can made it more better
  createStory: async function (req) {
    let result;
    let storyId;

    const t = await db.sequelize.transaction();

    try {
      await storyDb.create(req.body.text, req.params.userId, t).then(data => {
        result = data;
        storyId = result.id;
      });

      if (req.body.relationships && req.body.relationships.length > 0) {
        let relationshipsId = []
        req.body.relationships.forEach(item => {
          relationshipsId.push(item.id);
        })

        await storyDb.addArrayOfRelationship(result, relationshipsId, t).then(data => {
          result = data;
        });
      }

      await t.commit()

      await storyDb.findOneByIdForUser(storyId, req.params.userId).then(data => {
        result = data;
      })

      return result;

    } catch (e) {
      await t.rollback();
      throw new Error(error.sendError(400, ["story not stored"]));
    }
  }


};
