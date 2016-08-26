/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////
// Require and use Express
var express = require('express');
var app = express();
app.use(express.static('./client/public'));
// Require and use Body Parser
var bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Body parser config to accept datatypes
app.use(bodyParser.urlencoded({ extended: true }));
// Require mongoose
var mongoose = require('mongoose');
/************
 * DATABASE *
 ************/ 
var db = require('./server/models');
////////////////////
//  DATA
///////////////////
var products = [];
// var nextId = 1;

/* * HTML Endpoints  */
app.get('/', function homepage (req,res) {
	res.sendFile('/public/index.html', { root : __dirname});
});

////////////////////
//  API ROUTES
///////////////////
 app.get('/api', function apiIndex (req, res) {
 	res.json({
 		message: 'Welcome to EcoViews!',
 		documentation_url: 'https://github.com/Indigo253931/project-4',
 		base_url: 'http://ecoviews.herokuapp.com',
 		endpoints: [
 		{method:'GET', path: '/api/products', description: 'Describes available endpoints'}
 		]
 	});
 });

 /* * JSON API Endpoints */
//Get all products
app.get('/api/products', function productsIndex (req, res){
	// Find strain data from database and save it as a variable 'strains'
	db.Product.find(function(err, products){
		if (err) { return console.log('index error: ' + err); }
		// Send all strain pairing reccomendations as JSON response
		res.json(products);
	});
});

// Get one product
app.get('/api/products/:name', function productsShow(req, res){
		// Find one product
	db.Product.findOne({name: req.params.name}, function(err, product){
		if (err) { return console.log('show error: ' + err); }
		// Send one product as JSON response
		res.json(product);
	});
});

// Create new product
app.post('/api/products/new', function productsNew (req, res) {
	var newProduct;
		console.log(req.body);
		newProduct = new db.Product({
		name: req.body.name,
		kind: req.body.kind,
		activity: req.body.activity,
		description: req.body.description,
});
	// Save newProduct to database
    newProduct.save(function(err, product){
      if (err) {
        return console.log("save error: " + err);
      }
      // Send back the product!
		res.json(product);
		});
	});


/**********
 * SERVER *
 **********/

// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
console.log('Express server is up and running on http://localhost:/3000/');
});