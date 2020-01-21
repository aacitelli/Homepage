// npm imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Set up express 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Set up database connection w/ error handlers
require("dotenv").config({ path: "server/.env" });
mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@homepage-nwxpq.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection Error: "));
db.on("connected", console.log.bind(console, "Successfully Connected to MongoDB Database!"));

//! CREATE operations
// Add list 
// Add task to list

//! READ Operations

//! UPDATE operations 
// Change text of task 

//! DELETE operations
// Delete list 
// Delete task from list 

// Physically start up backend server 
app.listen(3001, () => {
    console.log("Express server is running on localhost:3001");
});