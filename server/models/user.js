
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	email: String,
	password: String,
	location: String,
	avatar: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;