var User = require('../models/user');
// GET
var getAll = function(request, response) {
  User.find(function(error, users) {
    if(error) {
      response.status(400).json({message: 'Could not find any users'});
    } else {
    response.json({users: users});
    }
  });
};
// POST
var createUser = function (request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var user = new User(request.body);
  user.save(function(error) {
    if(error) {
      response.status(400).json({messsage: 'Could not create user b/c:' + error});
    } else {
    response.json({user: user});
    }
  });
};
// GET
var getUser = function(request, response) {
  var id = request.params.id;
  User.findById({_id: id}, function(error, user) {
    if(error) {
      response.status(400).json({message: 'Could not find user b/c:' + error});
    } else {
    response.json({user: user});
    }
  });
};
var updateUser = function(request, response) {
  var id = request.params.id;
  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});
    if(request.body.username) user.username = request.body.username;
    if(request.body.email) user.email = request.body.email;
    if(request.body.password) user.password = request.body.password;
    if(request.body.location) user.location = request.body.location;
    if(request.body.avatar) user.avatar = request.body.avatar;
    user.save(function(error) {
      if(error) {
        response.status(400).json({messsage: 'Could not update user b/c:' + error});
      } else {
      response.json({message: 'User successfully updated', user: user});
      }
    });
  });
};
var removeUser = function (request, response) {
  var id = request.params.id;
  User.remove({_id: id}, function(error) {
    if(error) {
      response.status(400).json({message: 'Could not delete user b/c:' + error});
    } else {
    response.json({message: 'User successfully deleted'});
    }
  });
};
module.exports = {
  getAll: getAll,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  removeUser: removeUser
};