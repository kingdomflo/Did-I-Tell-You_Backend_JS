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
      modelName: "relationship_group",
      freezeTableName: true,
    }
  );

  Relationship_Group.associate = models => {
    Relationship_Group.belongsTo(models.user);
    Relationship_Group.belongsToMany(models.relationship, {through: 'relationship_group-relationships'});
  };

  return Relationship_Group;
};
