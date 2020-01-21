var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

import TaskSchema from "Task.js"; 

var ListSchema = new Schema({
    "name": String, 
    "tasks": [ TaskSchema ]
});