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
  Task.associate = function(models) {
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Task;
};