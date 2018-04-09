

var db = require("../models");


module.exports = function(app) {

  
  app.get("/api/pokeData", function(req, res) {
    db.PokeData.findAll({}).then(function(dbPokeData){
      res.json(dbPokeData);
    });
  });

  
  // app.post("/api/pokeData", function(req, res) {
  //   db.PokeData.findAll
  // });

  
  // app.delete("/api/placeholder/:id", function(req, res) {

  // });

  
  // app.put("/api/:anything", function(req, res) {

  // });
};
