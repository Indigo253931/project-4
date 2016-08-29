var express = require('express'),
router = express.Router(),
//Parse information from POST
bodyParser = require('body-parser');

var productIndexController = require ('../scripts/productIndexController');
var productShowController = require ('../scripts/productIndexController');
var productNewController = require ('../scripts/productIndexController');
var sectorIndexController = require ('../scripts/sectorIndexController');
var sectorShowController = require ('../scripts/sectorIndexController');

router.route('/products')

	//GET all products
	.get(productIndexController);

router.route('/products/:id')

	//GET a product
	.get(productShowController)

	// POST a new product
	.post(productNewController.createProduct)

	// PATCH update an existing product
	.patch(productUpdateController.updateProduct)

	// DELETE remove a product from db
	.delete(productDeleteController.removeProduct);

router.route('/products/sectors')

	//GET all products
	.get(sectorIndexController);

router.route('/products/sectors/:id')

	//GET a product
	.get(sectorShowController);	

module.exports = router;