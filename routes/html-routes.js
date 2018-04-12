// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.pokemonstats.findAll({
      include: [db.images]
    }).then(function (result) {
      res.render('index', { pokemon: result })
    });
  });

  app.get("/battle", function (req, res) {
    db.pokemonstats.findAll({
      include: [db.images]
    }).then(function (result) {
      res.render('battle', { pokemon: result })
    });
  });

  app.get("/pokemon/:pokeName", function (req, res) {

    db.pokemonstats.findAll({
      where: {
        pokeName: req.params.pokeName,

      },
      include: [db.images]
    }).then(function (result) {
      res.render('index', { pokemon: result });
    })
  });


  app.get("/pokemon/:Type_1", function (req, res) {
    db.pokemonstats.findAll({
      where: {
        Type_1: req.params.Type_1
      },
      include: [db.images]
    }).then(function (result) {
      res.render('index', { pokemon: result });
    });
  });


  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/members.html"));
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });
};

// res.sendFile(path.join(__dirname, "../public/html/signup.html"));







