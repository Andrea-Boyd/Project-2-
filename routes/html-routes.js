

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
        db.Qol.findOne({
            where: {
                CityId: req.params.CityId
            }
        }).then(function(Qol){
            let returnObject = {
                costOfLiving: Qol.costOfLiving,
                costOfLivingRev: Qol.costOfLivingRev,
                nightLife: Qol.nightLife,
                nightLifeRev: Qol.nightLifeRev,
                lgbtFriendly: Qol.lgbtFriendly,
                lgbtFriendlyRev: Qol.lgbtFriendlyRev,
                crimeScore: Qol.crimeScore,
                crimeScoreRev: Qol.crimeScoreRev
            }
            console.log(Qol.nightLife);
            res.render("cityData", returnObject);
        })
    });
};
