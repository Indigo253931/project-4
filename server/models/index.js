var mongoose = require('mongoose');
// connects to db
mongoose.connect('mongodb://localhost/api_products');

module.exports.Product = require('./product.js');
module.exports.User = require('./user.js');
module.exports.SectorIndustry = require('./sector_industry.js');

