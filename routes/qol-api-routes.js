
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts

//get city qoa info based on university's city
  app.get("/api/university", function(req, res) {
    var query = {};
    if (req.query.university) {
      query.city= req.query.uni_city;
    }
    db.Qoa.findAll({
      where: query
    }).then(function(dbQoa) {
      res.json(dbQoa);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });
// // THIS WILL MIMIC OUR FORUM METHODS? 
  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};