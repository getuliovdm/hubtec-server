'use strict';
export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: { 
      type : DataTypes.STRING
    },
    description: {
      type : DataTypes.STRING
    },
    finalDate: {
      type : DataTypes.DATE
    },
    userId: {
      type : DataTypes.INTEGER
    },
    deleted: {
      type : DataTypes.BOOLEAN
    }
  }, {});
  Tasks.associate = function(models) {
    Tasks.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Task;
};