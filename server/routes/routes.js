var Product = require('../models/product');
var Product = require('../models/user');
var Product = require('../models/sector_industry');
var mongoose = require('mongoose');
var express = require('express');
 router = express.Router(),
//Parse information from POST
 bodyParser = require('body-parser');

 var productsController = require ('../controllers/products');
 var sectorsController = require ('../controllers/sectors');
 var usersController = require ('../controllers/users');

console.log('hello!!!');
router.route('/products')

	//GET all products
	.get(productsController.getAll)

	.post(productsController.createProduct);

router.route('/products/:id')

	//GET a product
	.get(productsController.getProduct)

	// PATCH update an existing product
	// .patch(productsController.updateProduct)

	// DELETE remove a product from db
	.delete(productsController.removeProduct);

router.put('/products/:id/edit', function(req, res){
		console.log(req.body);
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
	.get(usersController.getAll)

	.post(usersController.createUser);

router.route('/users/:id')

	//GET a user
	.get(usersController.getUser)

	// PATCH update an existing user
	.patch(usersController.updateUser)

	// DELETE remove a user from db
	.delete(usersController.removeUser);

router.get('/', function (req, res){
	res.render('index', { user : req.user });
});

router.get('/register', function(req, res){
	res.render('register', { });
});

router.post('/register', function(req, res){
	Account.register(new Account({ username : req.body.username}), req.body.password, function(err, account){
		if (err) {
			return res.render('register', { account : account });
		} passport.authenticate('local')(req, res, function(){
			res.redirect('/');
		});
	});
});

router.get('/login', function(req, res){
	res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res){
	res.redirect('/');
});

router.get('/logout', function (req, res){
	req.logout();
	res.redirect('/');
});

router.get('/ping', function (req, res){
	res.status(200).send('pong!');
});

router.get('/', function(req, res, next){
	res.send('respond with a resource');
});

module.exports = router;