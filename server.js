//server.js: This is for Express and Node to deliever data to React with an API.
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jwt-simple');
//and create our instances
var app = express();
var router = express.Router();

// Required application specific custom router module
var routes = require("./src/Config/routes");

//set our port to either a predetermined port number if you have set it up, or 4200
var port = process.env.API_PORT || 4200;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://rob:apple@ds157653.mlab.com:57653/readgood')
  .then(() => {console.log("MongoDB Start")})
  .catch((err) => {
    console.log("App Starting Error: " + err.stack);
    process.exit(1)}
  )

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set JWT TOKEN SECRET:
app.set('jwtTokenSecret','apple4560narjwbrn'); //TODO: Figure out why this isn't working.

app.use('/api',routes);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});