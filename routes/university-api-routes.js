var db = require("../models");
const university = require("../models/university");

// Routes
// =============================================================
module.exports = function (app) {
    app.get("/api/city/:univ", function (req, res) {
        console.log(req)
        db.City.findAll({
            //include the universities tables
            where:{
                '$Univs.name$':req.params.univ
            },
            include: [{
                model: db.Univ
            },
            {
                model: db.Qol
            }]
        }).then(function (cityAndUniv) {
            console.log(cityAndUniv[0]);
            res.json(cityAndUniv[0]);
        });
    });

};