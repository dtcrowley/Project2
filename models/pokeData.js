module.exports = function(sequelize, DataTypes) {
    var pokemonstats = sequelize.define("pokemonstats", {
        name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
            len: [1, 151]
            }
        },

        type_1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 151]
            }
        },

        type_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 151]
            }
        },

        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        defense: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        special_atk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        special_def: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        speed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        generation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        legendary: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },{
            timestamps: false
    });
    
    return pokemonstats;

};
  