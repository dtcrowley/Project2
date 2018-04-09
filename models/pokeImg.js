module.exports = function(sequelize, DataTypes) {
    var images = sequelize.define('images', {
        img: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         
    }, {
        timestamp: false
    });

    return images
}