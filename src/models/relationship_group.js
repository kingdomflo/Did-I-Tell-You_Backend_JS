module.exports = (sequelize, DataTypes) => {
  const Relationship_Group = sequelize.define(
    "relationship_group",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      label: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "relationship_group"
    }
  );

  Relationship_Group.associate = models => {
    Relationship_Group.belongsTo(models.user);
  };

  return Relationship_Group;
};
