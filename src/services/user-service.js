const userDb = require("../database/user-database");

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
    return result;
  }
};
