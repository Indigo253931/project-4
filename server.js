/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////
require('dotenv').config();
// Require & use Express
var express = require('express');
// Generate a new express app, call it 'app'
var app = express();
app.use(express.static('./client/public'));
// Require mongoose
var mongoose = require('mongoose');
var db = require('./server/models');
// Require & use Body Parser
var bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Body parser config to accept datatypes
app.use(bodyParser.urlencoded({ extended: true }));
// Require & use routes
var routes = require('./server/routes/routes.js');
app.use(routes);
/************
 * DATABASE *
 ************/ 
 var db = require('./server/models');
/**********
 * SERVER *
 **********/
// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
console.log('Express server is up and running on http://localhost:/3000/');
});