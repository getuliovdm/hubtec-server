var bcrypt = require("bcryptjs");
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {
    hooks: {
      beforeCreate: function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      }
    }
  });
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.associate = (models) => {
    User.hasMany(models.Task, {
      foreignKey: 'userId',
    });
  };
  return User;
};