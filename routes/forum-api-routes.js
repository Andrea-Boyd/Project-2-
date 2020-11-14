
//Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

app.post("/api/review", function(req, res) {
    db.Qol.create(req.body).then(function(dbQol) {
      res.json(dbQol);
    });
  });
};
