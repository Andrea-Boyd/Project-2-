

var path = require("path");
var db= require("../models");
// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/search.html"));
    });

    // cms route loads forum.html
    app.get("/forum", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/forum.html"));
    });

    // retrieving information about a city 
    app.get("/cityData/:CityId", function (req, res) {
        db.Qol.findAll({
            where: {
                CityId: req.params.CityId
            }
        }).then(function(Qol){
            let qol = {
                costOfLiving: Qol.costOfLiving,                
                nightLife: Qol.nightLife,                
                lgbtFriendly: Qol.lgbtFriendly,                
                crimeScore: Qol.crimeScore,
                comment: Qol.comment               
            }
            res.render("cityData",JSON.stringify(qol));
        })
    });
};
