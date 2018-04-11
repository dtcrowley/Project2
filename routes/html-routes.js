// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {



  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/members.html"));
  });

  app.get("/signup", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  });
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/battle", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/battle.html"));
  });

};

// res.sendFile(path.join(__dirname, "../public/html/signup.html"));







