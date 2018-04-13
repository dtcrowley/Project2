
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require("path");
var handlebars = require("handlebars");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");
var env = require('dotenv').load();
var PORT = process.env.PORT || 5000;
var db = require("./models");
// var connection;
// if(process.env.JAWSDB_URL) {
//   //Heroku deployment
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   //local host
//     connection = mysql.createConnection({
//         root: 5000,
//         host: "localhost",
//         user: "root",
//         password: "@g5Ms2488",
//         database: "vawh31xclw4l22tl",
//     });
// };
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
