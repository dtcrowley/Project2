module.exports = function(sequelize, DataTypes) {
    var images = sequelize.define('images', {
        img: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         
    }, {
        timestamps: false
    });
    return images
}