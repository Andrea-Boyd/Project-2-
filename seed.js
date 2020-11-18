
var db = require("./models");

var seed = {
    addCity: function(){
        db.City.create({
            id: 8,
            name: "Boston", 
            createdAt: Date.now(),
            updatedAt: Date.now()

        })
    },
    addUniv: function(){
        db.Univ.create({
            name: "Harvard University",
            createdAt: Date.now(),
            updatedAt: Date.now(),
            CityId: 8
        })
    }
};

module.exports= seed 