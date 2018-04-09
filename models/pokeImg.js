module.exports = function(sequelize, DataTypes) {
    var PokeImg = sequelize.define('images', {
        img: { 
            type: DataTypes.STRING,
            allowNull: false,
          },
         
    }, {
        timestamp: false
    });
    return PokeImg;
}