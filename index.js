//all dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var router = require('./Router/Router');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
  
app.use(bodyParser.json());

app.use("/",router);

app.listen(9090, function(){
    console.log("Server is running on port 9090");
})
module.exports =app;