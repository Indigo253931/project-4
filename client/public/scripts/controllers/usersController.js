/////////////////
// CONTROLLERS //
/////////////////
app.controller('UsersController', UsersController)
.controller('UsersShowController', UsersShowController)
.controller('UsersNewController', UsersNewController)
.controller('UsersUpdateController', UsersUpdateController)
.controller('UsersDeleteController', UsersDeleteController);

UsersController.$inject = ['$scope', '$http', '$routeParams'];
UsersShowController.$inject = ['$scope', '$http', '$routeParams'];
UsersNewController.$inject = ['$window', '$scope', '$http', '$routeParams'];
UsersUpdateController.$inject = ['$window', '$scope', '$http', '$routeParams'];
UsersDeleteController.$inject = ['$window', '$scope', '$http', '$routeParams'];

function UsersController($scope, $http, $routeParams){
	function getUsers(){
		$http
		.get('/users/')
		.then(function(response){
			$scope.users=response.data.users;
			console.log($scope.users);
		});
	}
	getUsers();
}
function UsersNewController($window, $scope, $http, $routeParams){
	console.log('UsersNewController');
	$scope.createUser = function(){
		$http
		.post('/profile/', $scope.newUser)
		.then(function(response){
			if (response.status == 200){
				$window.location.href = '/#/profile/' + response.data.user._id;
			}
			$scope.users = response.data.user;	
			console.log(response);
		});
	};
}
function UsersShowController($scope, $http, $routeParams){
	console.log('UsersShowController' + $routeParams.id);
	function getUser(){
		$http
		.get('/profile/' + $routeParams.id)
		.then(function(response){
			console.log(response);
			$scope.user = response.data.user;
		});
	}
	getUser();
}
function UsersUpdateController($window, $scope, $http, $routeParams){
	$scope.updateUser = { user_id : $route.Params.id };
	$scope.updateUser.username = '';
	$scope.updateUser.email = '';
	$scope.updateUser.password = '';
	$scope.updateUser.location = '';
	$scope.updateUser.avatar = '';
	console.log($scope.updateUser);
		$scope.saveUser = function() {
			$http
			.put('/profile/' + $routeParams.id + '/edit', $scope.updateUser, {} )
			.then(function(response){
			$scope.users = response.data.user;	
			console.log(response);
			// updateUser();
		});
	};
}
function UsersDeleteController($scope, $http, $routeParams){
	$scope.destroyUser=function(){
		$http
		.delete('/users/' + $routeParams.id)
		.then(function(response){
			$scope.users=response.data.user;	
			console.log($scope.deleteUser);
			// deleteUser();
		});
	};
}
