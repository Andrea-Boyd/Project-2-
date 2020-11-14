module.exports = function(sequelize, DataTypes) {
    let City = sequelize.define("City", {
      name: DataTypes.STRING,
    });
    City.associate = function(models) {
      
        City.hasMany(models.Univ, {
          onDelete: "cascade"
        });
        City.hasMany(models.Qol, {
            onDelete: "cascade"
        });
      };
    return City;
  };
