module.exports = function(sequelize, DataTypes) {
    var images = sequelize.define('images', {
        img: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         pokID: {
            type: DataTypes.INTEGER,
            allowNull: false,
          }
         
    }, {
        timestamps: false
    });

    images.associate = function(models) {
        images.belongsTo(models.pokemonstats, {
            foreignKey: 'pokID',
            targetKey: 'id'
        });
    };

    return images
}