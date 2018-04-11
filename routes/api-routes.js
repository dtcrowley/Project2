var db = require("../models");
var passport = require("../config/passport")
module.exports = function (app) {

  app.get("/", function(req, res) {
    db.pokemonstats.findAll({
      include: [db.images]
    }).then(function(result) {
      res.render('index', {pokemon: result} )
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res){
    res.json("/members");
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get('/api/pokemon/image', function (req, res) {
    db.images.findAll({}).then(function (result) {
      res.json(result)
    })
  });

  // Display data for all pokemon
  app.get("/api/pokemon/", function (req, res) {
    console.log(Object.keys(db))

    db.pokemonstats.findAll()
      .then(function (PokeDb) {
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
