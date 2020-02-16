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
  },

  updateForUser: async function (req) {
    let result;
    await storyDb.updateForUser(req.params.id, req.params.userId, req.body).then(async data => {
      if (data[0] == 1) {
        await storyDb.findOneByIdForUser(req.params.id, req.params.userId).then(story => {
          result = story;
        });
      } else {
        throw new Error(error.sendError(400, ["story not updated"]));
      }
    });
    return result;
  },

  deleteForUser: async function (req) {
    let result;
    await storyDb.deleteForUser(req.params.id, req.params.userId).then(data => {
      if (data > 0) {
        result = { rowDeleted: data };
      } else {
        throw new Error(error.sendError(400, ["story not deleted"]));
      }
    });
    return result;
  },

  addRelationshipsToStory: async function (req) {
    let result;

    await storyDb.findOneByIdForUser(req.params.id, req.params.userId).then(data => {
      result = data;
    });

    if (req.body.length > 0) {
      let relationshipsId = []

      for (const item of req.body) {
        await relationshipDb.findOneByIdForUser(item.id, req.params.userId).then(data => {
          if (data) {
            relationshipsId.push(data.id);
          }
        });
      }

      if (relationshipsId.length > 0) {
        await storyDb.addArrayOfRelationship(result, relationshipsId).then(data => {
          result = data;
        });

        await storyDb.findOneByIdForUser(req.params.id, req.params.userId).then(data => {
          result = data;
        });
      }
    }

    return result;
  },

};
