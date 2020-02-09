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

  create: async function (text, userId, transac = null) {
    let result;
    await db.story.create({ text, userId }, { transaction: transac }).then(data => {
      result = data;
    });
    return result;
  },

  addArrayOfRelationship: async function (story, relationships, transac = null) {
    let result;
    await story.addRelationships(relationships, { transaction: transac }).then(data => {
      result = data;
    });
    return result;
  }

};
