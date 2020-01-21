// npm imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Set up express 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up database connection w/ error handlers
require("dotenv").config({ path: "server/.env" });
mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@homepage-nwxpq.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection Error: "));
db.on("connected", console.log.bind(console, "Successfully Connected to MongoDB Database!"));

// Import necessary Schemas 
const Board = require("./schemas/Board");

//! CREATE operations
// Add Board 
app.post("/api/kanban/board", function(req, res) {
    const NewBoardObject = new Board(req.body);
    NewBoardObject.save(err => {
        if (err) return res.status(500).send(err); 
        return res.status(200).send(NewBoard);
    });
});

// Add List to Board 
app.post("/api/kanban/list", function(req, res) {
});

// Add Task to List 
app.post("/api/kanban/task", function(req, res) {

});

//! READ Operations
// Read Board 
app.get("/api/kanban/board", function(req, res) {

});

//! UPDATE operations 

//! DELETE operations
// Delete Board 
app.delete("/api/kanban/board", function(req, res) {

});

// Delete List from Board 
app.delete("/api/kanban/list", function(req, res) {

});

// Delete Task from List 
app.delete("/api/kanban/task", function(req, res) {

});

// Physically start up backend server 
app.listen(3001, () => {
    console.log("Express server is running on localhost:3001");
});