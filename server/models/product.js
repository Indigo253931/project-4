// Define Schema
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/products');
var Schema = mongoose.Schema;

// Define attributes for product Schema
var ProductSchema = new Schema({
	sector: String,
	industry: String,
	company_name: String,
	product_name: String,
	comments: [String],
	image: String
});

// Create mongoose model
var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;