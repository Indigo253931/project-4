var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

module.exports.Product = require('./product.js');
module.exports.User = require('./user.js');
module.exports.SectorIndustry = require('./sector_industry.js');

