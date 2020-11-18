
//Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

app.post("/api/review", function(req, res) {
    console.log(req)
    db.Qol.create({
      costOfLiving: req.body.costOfLiving,                
      nightLife: req.body.nightLife,                
      lgbtFriendly: req.body.lgbtFriendly,                
      crimeScore: req.body.crimeScore,
      comment: req.body.comment,
      CityId:req.body.CityId  
      }).then(function(dbQol) {
      res.json(dbQol);
    });
  });
};
