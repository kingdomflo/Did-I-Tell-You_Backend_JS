const relationshipDb = require("../database/relationship-database");
const error = require("../tools/error");

module.exports = {

  findAllForUser: async function(userId) {
    let result;
    await relationshipDb.findAllForUser(userId).then(data => {
      result = data;
    });
    return result;
  },

  findAll: async function() {
    let result;
    await relationshipDb.findAll().then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function(pk) {
    let result;
    await relationshipDb.findOneById(pk).then(data => {
      result = data;
    });
    if (result == null) {
      throw new Error(error.sendError(400, ["user not present"]));
    }
    return result;
  },

  create: async function (req) {
    let result;
    await relationshipDb.create(req).then(data => {
      result = data;
    });
    return result;
  }
};
