module.exports = function(sequelize, DataTypes) {
    let City = sequelize.define("City", {
      city: DataTypes.STRING,
      university: DataTypes.STRING
    });
    return City;
  };