var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	sector: String,
	industry: String,
	company_name: String,
	product_name: String,
	comments: [String],
	image: String
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;