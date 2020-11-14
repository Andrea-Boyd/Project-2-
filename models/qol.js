module.exports = function(sequelize, DataTypes) {
    var Qol = sequelize.define("Qol", {
      costOfLiving: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      nightLife: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      lgbtFriendly: {
        type: DataTypes.BOOLEAN,
      },
      crimeScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      costOfLivingRev: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
        
      },
      nightLifeRev: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      lgbtFriendlyRev: {
        type: DataTypes.STRING,
      },
      crimeScoreRev: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
    });
  
    Qol.associate = function(models) {
    
    Qol.belongsTo(models.City, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Qol;
  };