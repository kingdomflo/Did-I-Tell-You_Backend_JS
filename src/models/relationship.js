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
      modelName: "relationship",
      freezeTableName: true,
    }
  );

  Relationship.associate = models => {
    Relationship.belongsTo(models.user);
    Relationship.belongsToMany(models.story, { through: 'story-relationships' });
    Relationship.belongsToMany(models.relationship_group, {through: 'relationship_group-relationships'});
  };

  return Relationship;
};
