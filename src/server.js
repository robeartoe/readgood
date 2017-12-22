//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://rob:apple@ds157653.mlab.com:57653/readgood')
  .then(() => {console.log("Start")})
  .catch((err) => {
    console.log("App Starting Error: " + err.stack);
    process.exit(1)}
  )
  
// Required application specific custom router module
var itemRouter = require('./src/routes/itemRoutes');

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});
