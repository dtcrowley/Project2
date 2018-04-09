module.exports = function(sequelize, DataTypes) {
    var images = sequelize.define('images', {
        photo: { 
            type: DataTypes.STRING,
            allowNull: false,
          },





    });

    return images

}