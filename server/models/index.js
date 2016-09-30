var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
// connects to db
if (process.env.DB_HOST) {
	mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST);
} 
else {
	mongoose.connect('mongodb://localhost/api_products');
}

module.exports.Product = require('./product.js');
module.exports.User = require('./user.js');
module.exports.SectorIndustry = require('./sector_industry.js');
