var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

import ListSchema from "List.js"; 

var BoardSchema = new Schema({
    "name": String, 
    "lists": [ ListSchema ]
});