module.exports = function(sequelize, DataTypes) {
    let Univ = sequelize.define("Univ", {
      city: DataTypes.STRING,
      university: DataTypes.STRING
    });
    return Univ;
  };