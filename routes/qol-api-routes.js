
// Requiring our models
var db = require("../models");
const { query } = require("express");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts

  //get city qoa info based on university's city
  app.get("/api/:city", function (req, res) {
    db.City.findAll({
      where: {
        name: req.params.city
      }
    }).then(function (data) {
      const cityid = (data[0].id);
      db.Qol.findAll({
        where: { CityID: cityid }
      }).then(function (cityData) {
        //returns raw city data
        res.json(cityData);
      })
    });

  });
  // Get route form making a new forum post
  // will need to select each city to post review to 
  // may need to modify actual route
  app.post("/api/:id/:userInput", function (req, res) {
    db.Qol.create({
      where: {
        CityId: req.params.id
      }
    }).then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });
};
