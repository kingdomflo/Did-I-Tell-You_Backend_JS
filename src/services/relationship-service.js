const relationshipDb = require("../database/relationship-database");
const error = require("../tools/error");

module.exports = {
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
  }
};
