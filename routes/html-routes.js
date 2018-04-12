var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // app.get("/members", function(req, res) {
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/html/index.html"));
  // });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/members.html"));
  });
  
  app.get("/battle", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/battle.html"));
  })
  
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  })
};