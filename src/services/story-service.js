const storyDb = require("../database/story-database");
const error = require("../tools/error");

module.exports = {
  findAll: async function () {
    let result;
    await storyDb.findAll().then(data => {
      result = data;
    });
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

};
