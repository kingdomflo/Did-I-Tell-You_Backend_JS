const db = require("../models");

module.exports = {
  findAll: async function() {
    let result;
    await db.user.findAll().then(data => {
      console.log(data);
      result = data;
    });
    return result;
  },

  findByPk: async function(pk) {
    let result;
    await db.user.findByPk(pk).then(data => {
      console.log(data);
      result = data;
    });
    return result;
  }
};
