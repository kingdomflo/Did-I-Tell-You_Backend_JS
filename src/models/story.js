module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "story",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "story"
    }
  );

  Story.associate = models => {
    Story.belongsTo(models.user);
  };

  return Story;
};