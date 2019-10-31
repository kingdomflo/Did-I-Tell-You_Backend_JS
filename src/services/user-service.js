const userDb = require("../database/user-database");
const error = require("../tools/error");

module.exports = {
  findAll: async function() {
    let result;
    await userDb.findAll().then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function(pk) {
    let result;
    await userDb.findOneById(pk).then(data => {
      result = data;
    });
    if (result == null) {
      throw new Error(error.sendError(400, ["user not present"]));
    }
    return result;
  },

  create: async function (req) {
    let result;
    console.log(req);
    await userDb.create(req).then(data => {
      result = data;
    });
    return result;
  }
};
