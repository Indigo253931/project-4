// Require models
var Product = require('../models/product');
var User = require('../models/user');
var Sector = require('../models/sector_industry');

// Require Mongoose & Express
var mongoose = require('mongoose');
var express = require('express'),
router = express.Router(),

//Parse information from POST
bodyParser = require('body-parser');

// Require controllers
 var productsController = require ('../controllers/products');
 var sectorsController = require ('../controllers/sectors');
 var usersController = require ('../controllers/users');

router.route('/products')

	//GET all products
	.get(productsController.getAll)

	.post(productsController.createProduct);

router.route('/products/:id')

	//Find a product
	.get(productsController.getProduct)

	// Update a product

	// Delete & remove a product from db
	.delete(productsController.removeProduct);

router.put('/products/:id/edit', function(req, res){
		// console.log(req.body);
		var productId = mongoose.Types.ObjectId(req.body.product_id);

		mongoose.model('Product').findByIdAndUpdate(productId, req.body, function(err, product) {
			console.log(err);
			console.log(product);
		});
});

router.route('/sectors')

	//GET all sectors
	.get(sectorsController.getAll);

router.route('/sectors/:id')

	//GET a sector
	.get(sectorsController.getSector);

router.route('/users')

	//GET all users
	.get(usersController.getAllUsers)

	.post(usersController.createUser);

router.route('/users/:id')

	//GET a user
	.get(usersController.getUser)

	// DELETE remove a user from db
	.delete(usersController.removeUser);

router.put('/users/:id/edit', function(req, res){
		// console.log(req.body);
		var userId = mongoose.Types.ObjectId(req.body.user_id);
		
		mongoose.model('User').findByIdAndUpdate(userId, req.body, function(err, user) {
			console.log(err);
			console.log(user);
		});
});
module.exports = router;