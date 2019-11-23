// NPM Imports 
var express = require("express");
var mongoose = require("mongoose");
var login = require("./private");

// Initialization of Constants 
const PORT = 5000;
var app = express();
mongoose.connect("mongodb+srv://" + login.username + ":" + login.password + "@crux-nwxpq.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;

// Database Connection Debug 
db.on("error", console.error.bind(console, "Connection Error: "));
db.on("open", console.log.bind(console, "Successfully Connected To Database!"))

// Specifies the port to run on 
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
