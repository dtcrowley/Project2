var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.pokemonstats.findAll({
      include: [db.images]
    }).then(function(result) {
      res.render('index', {pokemon: result} )
    });
  });
  
  
  app.get('/api/pokemon/image', function(req,res) {
    db.images.findAll({}).then(function(result) {
      res.json(result)
    })
  });

// Display data for all pokemon
  app.get("/api/pokemon/", function(req, res) {
    db.pokemonstats.findAll()
      .then(function(PokeDb) {
        res.json(PokeDb);
      });
  });

// Display data for all pokemon of a certain type
  app.get("/api/pokemon/:Type_1", function(req, res) {
    db.pokemonstats.findAll({
      where: {
        Type_1: req.params.Type_1
      }
    }).then(function(PokeDb){
      res.json(PokeDb);
    })
  });

// Display pokemon data for a given name
  app.get("/api/:pokeName", function(req, res){
    db.pokemonstats.findAll({
      where: {
        pokeName: req.params.pokeName
      }
    }).then(function(PokeDb){
      res.json(PokeDb);
    })
  });

  // app.get("/api/:id", function(req, res){
  //   db.pokemonstats.findAll({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(PokeDb){
  //     res.json(PokeDb);
  //   })
  // });

  
  // app.delete("/api/", function(req, res) {

  // });

  
  // app.put("/api/:anything", function(req, res) {

  // });
}

