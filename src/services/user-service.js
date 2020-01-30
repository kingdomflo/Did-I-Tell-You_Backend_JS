const userDb = require("../database/user-database");
const error = require("../tools/error");
var jwt = require('jsonwebtoken');

module.exports = {
  findAll: async function () {
    let result;
    await userDb.findAll().then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function (pk) {
    let result;
    await userDb.findOneById(pk).then(data => {
      result = data;
    });
    if (!result) {
      throw new Error(error.sendError(400, ["user not present"]));
    }
    return result;
  },

  create: async function (req) {
    let result;
    await userDb.create(req).then(data => {
      result = data;
    });
    return result;
  },

  login: async function (req) {
    let result;
    await userDb.findOneByAuthId(req.body.authId).then(data => {
      result = data;
    });
    if (!result) {
      // TODO create the new user if it's not yet present
      throw new Error(error.sendError(400, ["user not present"]));
    }

    const token = jwt.sign({ id: result.id }, process.env.JWT_TOKEN_SIGN);

    return { "apiToken": token };
  }
};
