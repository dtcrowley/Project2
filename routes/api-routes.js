

var db = require("../models");


module.exports = function(app) {

  
  app.get("/", function(req, res) {
    res.render('index');
  });

// Display data for all pokemon
  app.get("/api/pokemon", function(req, res) {
    db.PokeData.findAll({})
      .then(function(results) {
        res.json(results);
      });
  });

// Display data for all pokemon of a certain type
  app.get("/api/type/:type_1", function(req, res) {
    db.PokeData.findAll({
      where: {
        type_1: req.params.type_1
      }
  })
  }

// Display pokemon data for a given name
  app.get("/api/name/:name", function(req, res){
    db.PokeData.findOne({
      where: {
        name: req.params.name
      }
    })
  });

  
  app.delete("/api/", function(req, res) {

  });

  
  app.put("/api/:anything", function(req, res) {

  });
}

