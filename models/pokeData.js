module.exports = function(sequelize, DataTypes) {
    var pokemonstats = sequelize.define("pokemonstats", {
        pokeName: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
            len: [1, 151]
            }
        },

        Type_1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 151]
            }
        },

        Type_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 151]
            }
        },

        Total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        HP: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        
        Attack: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Defense: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Special_atk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Special_def: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Speed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Generation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Legendary: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },{
            timestamps: false
    });

    pokemonstats.associate = function(models) {
        pokemonstats.hasMany(models.images, {
            onDelete: 'cascade',
            sourceKey: 'id',
            foreignKey: 'pokID'
        });
    }
    
    return pokemonstats;

};
  