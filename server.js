
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());// Middleware


// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"))

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


require("dotenv").config();

// Routes
// require("./routes/apiRoutes")(app);
require("./routes/hbs-routes")(app);
require("./routes/api-routes")(app);


// Helper
require("./helper/yelpAPIcall");
// require("./helper/googleMaps");

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    // console.log(
    //   "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    //   PORT,
    //   PORT
    // );
  
      console.log("Server listening on: http://localhost:" + PORT + "/");
  });
});

module.exports = app;