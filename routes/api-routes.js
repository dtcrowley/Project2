

var db = require("../models");


module.exports = function(app) {

  
  app.get("/", function(req, res) {
    res.render('index');
  });

  
  app.post("/api/anything", function(req, res) {

  });

  
  app.delete("/api/placeholder/:id", function(req, res) {

  });

  
  app.put("/api/:anything", function(req, res) {

  });
};
