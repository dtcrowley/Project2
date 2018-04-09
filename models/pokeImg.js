module.exports = function(sequelize, DataTypes) {
    var PokeImg = sequelize.define('PokeImg', {
        photo: { 
            type: DataTypes.STRING,
            allowNull: false,
          },





    });
}