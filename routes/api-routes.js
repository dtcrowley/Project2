var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  app.get('/api/pokemon/image', function (req, res) {
    db.images.findAll({}).then(function (result) {
      res.json(result)
    })
  });

  // Display data for all pokemon
  app.get("/api/pokemon", function (req, res) {
    console.log(Object.keys(db))

    db.pokemonstats.findAll()
      .then(function (PokeDb) {
        res.json(PokeDb);
      });
  });

  // Display data for all pokemon of a certain type
  app.get("/api/type/:Type_1", function (req, res) {
    db.pokemonstats.findAll({
      where: {
        Type_1: req.params.Type_1
      }
    }).then(function (PokeDb) {
      res.json(PokeDb);
    })
  });

  // Display pokemon data for a given name
  app.get("/api/:pokeName", function (req, res) {
    db.pokemonstats.findAll({
      where: {
        pokeName: req.params.pokeName
      },
      include: [db.images]
    }).then(function (PokeDb) {
      res.json(PokeDb);
    })
  });
}
