var express = require('express'),
router = express.Router(),
//Parse information from POST
bodyParser = require('body-parser');

var productsController = require ('../controllers/productsController');

router.route('/products')

	//GET all products
	.get(productsController)

	// POST a new product
	.post(productsController.createProduct);

router.route('/products/:id')

	// POST a new product
	.get(productsController.getProduct)

	// PATCH update an existing product
	.patch(productsController.updateProduct)

	// DELETE remove a product from db
	.delete(productsController.removeProduct);

module.exports = router;