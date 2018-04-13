// Requiring bcrypt for password hashing.
var bcrypt = require("bcrypt-nodejs");
// Creating User model
module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trainerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pokeGym: {
      type: DataTypes.STRING, 
      allowNull: true
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true
    }

  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
