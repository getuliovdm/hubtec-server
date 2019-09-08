export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Task, {
      foreignKey: 'userId',
    });
  };
  return User;
};