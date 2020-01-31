const db = require("../models");

module.exports = {

  findAllForUser: async function (userId) {
    let result;
    await db.relationship.findAll({ where: { userId: userId }, include: ['user'] }).then(data => {
      result = data;
    });
    return result;
  },

  findAll: async function () {
    let result;
    await db.relationship.findAll({ include: ['user'] }).then(data => {
      result = data;
    });
    return result;
  },

  findOneByIdForUser: async function (pk, userId) {
    let result;
    await db.relationship.findOne({ where: { id: pk, userId: userId } }).then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function (pk) {
    let result;
    await db.relationship.findByPk(pk).then(data => {
      result = data;
    });
    return result;
  },

  create: async function (relationship) {
    let result;
    await db.relationship.create(relationship).then(newRelationship => {
      result = newRelationship;
    });
    return result;
  },

  deleteForUser: async function (pk, userId) {
    let result;
    await db.relationship.destroy({ where: { id: pk, userId: userId } }).then(data => {
      result = data;
    });
    return result;
  },

  updateForUser: async function (pk, userId, object) {
    let result;
    await db.relationship.update(object, { where: { id: pk, userId: userId } }).then(data => {
      result = data;
    });
    return result;
  }
};
