module.exports = function(sequelize, DataTypes) {
    //attributes of university quality of life s retrieved by teleport
    //all under categories array (ex. categories.data.consumer-price-index-telescore)
    // cost of living (from "CONSUMER-PRICE-INDEX-TELESCORE" meaning inflation)
    // avg apartments costs (APARTMENT-RENT-LARGE/SMALL/MEDIUM)
    //LGBTQAI+ friendly (LGBT-INDEX), string value, if >75 friendly, 50-75 okay, <50= not so great
    //crime rate CRIME-RATE-TELESCORE, or some others related to guns/gun deaths per 100000
    //there are other metrics they have like weather, traffic, and eco-friendly if those are ones we aim to include

    //Atlanta
    //Baltimore
    //Chicago
    //Miami
    //Memphis
    //Nashville
    //Philadelphia

    var Qol = sequelize.define("qol", {
      costOfLiving: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      smallApartment: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },
      medApartment: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      },
      largeApartment: {
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
    });
  
    qol.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
    qol.belongsTo(models.university, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Qol;
  };