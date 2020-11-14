module.exports = function(sequelize, DataTypes) {
    let Univ = sequelize.define("Univ", {
      name: DataTypes.STRING
    });
    Univ.associate = function(models) {
      Univ.belongsTo(models.City, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Univ;
  };