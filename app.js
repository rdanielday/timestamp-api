var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'pug');

var routes = require("./routes/routes.js")(app);

var server = app.listen(process.env.PORT, function() {
  console.log("Listening on port %s...", server.address().port);
});



