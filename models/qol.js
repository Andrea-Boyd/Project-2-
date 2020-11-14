module.exports = function(sequelize, DataTypes) {
    var Qol = sequelize.define("qol", {
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
        len: [1]
      },
      lgbtFriendly: {
        type: DataTypes.BOOLEAN,
      },
      crimeScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },
      costOfLivingRev: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
        
      },
      nightLifeRev: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
      lgbtFriendlyRev: {
        type: DataTypes.STRING,
      },
      crimeScoreRev: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
    });
  
    Qol.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
    Qol.belongsTo(models.Univ, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Qol;
  };