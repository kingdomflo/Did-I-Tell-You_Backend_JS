const db = require("../models");

module.exports = {
  findAll: async function() {
    let result;
    await db.relationship.findAll({include: ['user']}).then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function(pk) {
    let result;
    await db.relationship.findByPk(pk).then(data => {
      result = data;
    });
    return result;
  },

  create: async function (relationship) {
    console.log(relationship);
    let result;
    await db.relationship.create(relationship).then(newRelationship => {
      result = newRelationship;
    });
    return result;
  }
};
