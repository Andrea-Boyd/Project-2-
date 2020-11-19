

var path = require("path");
var db = require("../models");
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
        }).then(function (Qol) {
            if (!null) {
                
                let qols={
                    qolArray:[]
                };
                for (var i=0; i<Qol.length; i++){
                    qols.qolArray.push(Qol[i].dataValues);
                }
                console.log(qols.qolArray);
                res.render("cityData", qols);
            }
            else {
                alert("No entries found. Sending back to univerCITY home")
                res.sendFile(path.join(__dirname, "../public/search.html"))
            }

        });
    });
};
