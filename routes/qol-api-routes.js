
// Requiring our models
var db = require("../models");
const { query } = require("express");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts

//get city qoa info based on university's city
  app.get("/api/university/:id", function(req, res) {
    //may need to catch :uniersity then id, then city
    let query= req.params.id
    db.Qoa.findAll({
      where: query
    }).then(function(dbQoa) {
      res.json(dbQoa.city);
    });
  });

  // Get route form making a new forum post
  // will need to select each city to post review to 
  // 
  app.pos("/api/:id/:userInput", function(req, res) {
    db.Univ.create({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });
};
app.post("/api/posts", function(req, res) {
  db.Qol.create({
    where :{ id:req.params.id}
  }).then(function(req) {
    res.json(req.body);
  });
});