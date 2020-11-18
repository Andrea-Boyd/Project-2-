const { now } = require("sequelize/types/lib/utils");
var db = require("./models");

var seed = {
    addCity: function(){
        db.City.create({
            id: 8,
            name: "Boston", 
            createdAt: now(),
            updatedAt: now()

        })
    },
    addUniv: function(){
        db.Univ.create({
            name: "Harvard University",
            createdAt: now(),
            updatedAt: now(),
            CityId: 8
        })
    }
};

module.exports= seed 