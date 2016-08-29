/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////
// Require and use Express
var express = require('express');
// Generate a new express app and call it 'app'
var app = express();
app.use(express.static('./client/public'));
// Require mongo
// var mongodb = require("mongodb");
// Require mongoose
var mongoose = require('mongoose');
var db = require('./server/models');
// Require and use Body Parser
var bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Body parser config to accept datatypes
app.use(bodyParser.urlencoded({ extended: true }));
// Require and use routes
var routes = require('./server/routes/routes.js');
app.use(routes);

/************
 * DATABASE *
 ************/ 
 var db = require('./server/models');


////////////////////
//  DATA
///////////////////
// var products = [];
// var sector_industry = [];


// /* * HTML Endpoints  */
// app.get('/', function homepage (req,res) {
// 	res.sendFile('/public/index.html', { root : __dirname});
// });

// ////////////////////
// //  API ROUTES
// ///////////////////
//  app.get('/api', function apiIndex (req, res) {
//  	res.json({
//  		message: 'Welcome to EcoViews!',
//  		documentation_url: 'https://github.com/Indigo253931/project-4',
//  		base_url: 'http://ecoviews.herokuapp.com',
//  		endpoints: [
//  		{method:'GET', path: '/api/products', description: 'Describes available endpoints'}
//  		]
//  	});
//  });

//  /* * JSON API Endpoints */

// //Get all products
// app.get('/api/products', function productsIndex (req, res){
// 	// Find product data from database and save it as a variable 'products'
// 	db.Product.find({},function(err, products){
// 		if (err) { return console.log('index error: ' + err); }
// 		// Send all products as JSON response
// 		res.json(products);
// 	});
// });

// // Get one product
// app.get('/api/products/:id', function productsShow(req, res){
// 		// Find one product
// 	db.Product.findOne({_id: req.params.id}, function(err, product){
// 		if (err) { return console.log('show error: ' + err); }
// 		// Send one product as JSON response
// 		res.json(product);
// 	});
// });


// // Create new product
// app.post('/api/products/new', function productsNew (req, res) {
// 		console.log(req.body);
// 		var newProduct = new db.Product({
// 			company_name: req.body.company_name,
// 			product_name: req.body.product_name,
// 			comments: req.body.comments,
// 			image: req.body.image
// });
// 	// Save newProduct to database
//     newProduct.save(function(err, product){
//       if (err) {
//         return console.log("save error: " + err);
//       }
//       // Send back the product!
// 		res.json(product);
// 		});
// 	});
	
// // Update one product
// app.put('/api/products/:id', function productsUpdate(req, res){
// 	// 	// Update one product
// 	 db.Product.updateOne({_id: req.params.id}, function(err, product){
// 		if (err) { return console.log('show error: ' + err); }
// 		// Send one product as JSON response
// 		res.json(updatedProduct);
// 	});
// });
// 	app.delete('/api/products/:id', function productsDelete(req, res) {
// 		console.log('products delete', req.params);
// 		var productId = req.params.id;
// 		db.Product.findOneAndRemove({ _id: productId});
// 		res.json(deletedProduct);
// 	});


// //Get all sectors
// app.get('/api/sectors', function sectorsIndex (req, res){
// 	// Find sector data from database and save it as a variable 'sectors'
// 	db.SectorIndustry.find({},function(err, sectors){
// 		if (err) { return console.log('index error: ' + err); }
// 		// Send all sectors as JSON response
// 		res.json(sectors);
// 	});
// });

// // Get one sector
// app.get('/api/sectors/:id', function sectorsShow(req, res){
// 		// Find one sector
// 	db.SectorIndustry.findOne({_id: req.params.id}, function(err, sector){
// 		if (err) { return console.log('show error: ' + err); }
// 		// Send one sector as JSON response
// 		res.json(sector);
// 	});
// });

/**********
 * SERVER *
 **********/
// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
console.log('Express server is up and running on http://localhost:/3000/');
});