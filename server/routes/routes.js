var express = require('express'),
router = express.Router(),
//Parse information from POST
bodyParser = require('body-parser');

 var productsController = require ('../controllers/products');
 var sectorsController = require ('../controllers/sectors');
 var usersController = require ('../controllers/users');

router.route('/products')

	//GET all products
	.get(productsController.getAll)

	.post(productsController.createProduct);

router.route('/products/:id')

	//GET a product
	.get(productsController.getProduct)

	// PATCH update an existing product
	.patch(productsController.updateProduct)

	// DELETE remove a product from db
	.delete(productsController.removeProduct);

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

module.exports = router;