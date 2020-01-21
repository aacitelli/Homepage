const express = require("express"); 
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({ extended: false })) 

app.listen(3001, () => {
    console.log("Express server is running on localhost:3001");
})