const db = require("../models");
const Relationship = require("./relationship");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      authId: DataTypes.STRING,
      registrationDate: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "user"
    }
  );

  User.associate = models => {
    User.hasMany(models.relationship);
  };

  return User;
};
