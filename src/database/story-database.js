const db = require("../models");

module.exports = {

  findAllForUser: async function (userId) {
    let result;
    await db.story.findAll({ where: { userId: userId }, include: ['user', 'relationships'] }).then(data => {
      result = data;
    });
    return result;
  },

  findAll: async function () {
    let result;
    await db.story.findAll({ include: ['user', 'relationships'] }).then(data => {
      result = data;
    });
    return result;
  },

  findOneByIdForUser: async function (pk, userId) {
    let result;
    await db.story.findOne({ where: { id: pk, userId: userId }, include: ['user', 'relationships'] }).then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function (pk) {
    let result;
    await db.story.findByPk(pk, { include: ['user', 'relationships'] }).then(data => {
      result = data;
    });
    return result;
  },

};
