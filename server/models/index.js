var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api_products');

module.exports.Product = require('./product.js');

