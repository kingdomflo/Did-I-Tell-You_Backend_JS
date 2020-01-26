const db = require("../models");

module.exports = {
  findAll: async function() {
    let result;
    await db.story.findAll({include: ['user', 'relationships']}).then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function(pk) {
    let result;
    await db.story.findByPk(pk, {include: ['user', 'relationships']}).then(data => {
      result = data;
    });
    return result;
  },

};
