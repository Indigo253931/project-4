var express = require('express'),
router = express.Router(),
//Parse information from POST
bodyParser = require('body-parser');

var productIndexController = require ('../scripts/productIndexController');
var productShowController = require ('../scripts/productIndexController');
var productNewController = require ('../scripts/productIndexController');
router.route('/products')

	//GET all products
	.get(productIndexController);

router.route('/products/:id')

	//GET a product
	.get(productShowController)

	// POST a new product
	.post(productNewController.createProduct)

	// PATCH update an existing product
	.patch(productShowController.updateProduct)

	// DELETE remove a product from db
	.delete(productsController.removeProduct);

module.exports = router;