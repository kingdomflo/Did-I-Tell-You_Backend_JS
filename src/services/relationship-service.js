const relationshipDb = require("../database/relationship-database");
const error = require("../tools/error");

module.exports = {

  findAllForUser: async function (userId) {
    let result;
    await relationshipDb.findAllForUser(userId).then(data => {
      result = data;
    });
    return result;
  },

  findAll: async function () {
    let result;
    await relationshipDb.findAll().then(data => {
      result = data;
    });
    return result;
  },

  findOneByIdForUser: async function (pk, userId) {
    let result;
    await relationshipDb.findOneByIdForUser(pk, userId).then(data => {
      result = data;
    });
    if (result == null) {
      throw new Error(error.sendError(400, ["relationship not present"]));
    }
    return result;
  },

  findOneById: async function (pk) {
    let result;
    await relationshipDb.findOneById(pk).then(data => {
      result = data;
    });
    if (result == null) {
      throw new Error(error.sendError(400, ["relationship not present"]));
    }
    return result;
  },

  create: async function (req) {
    let result;
    await relationshipDb.create({ name: req.body.name, userId: req.params.userId }).then(data => {
      result = data;
    });
    return result;
  },

  deleteForUser: async function (req) {
    let result;
    await relationshipDb.deleteForUser(req.params.id, req.params.userId).then(data => {
      if (data > 0) {
        result = { rowDeleted: data };
      } else {
        throw new Error(error.sendError(400, ["relationship not deleted"]));
      }
    });
    return result;
  }
};
