var express = require("express");
//var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");



var PORT = 3000;
var app = express();


//app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


require('./routes/viewroutes')(app);
require('./routes/apiroutes')(app);
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
