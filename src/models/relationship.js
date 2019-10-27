module.exports = (sequelize, DataTypes) => {
  const Relationship = sequelize.define(
    "relationship",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "relationship"
    }
  );

  Relationship.associate = models => {
    Relationship.belongsTo(models.user);
  };

  return Relationship;
};
