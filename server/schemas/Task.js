var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var TaskSchema = new Schema({
    "text": String, 
    "dueDate": String, 
    "isComplete": Boolean
});