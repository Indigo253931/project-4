app.controller('UsersController', UsersController);

				/////////////////
				// CONTROLLERS //
				/////////////////

	UsersController.$inject = ['$scope', '$http', '$routeParams'];


	function getUsers($scope, $http){

		var users = User.get('http://localhost:3000/#/users')
		.then(function(response){
			$scope.users=$scope.response.users;
			console.log($scope.users);
		});
	}

	function getUser($scope, $http, $routeParams){
		$http
		.get('http://localhost:3000/#/users/:id' + $routeParams.id)
		.then(function(response){
			$scope.users=$scope.response.user;
			console.log($scope.user);
		});
	}

	function newUser($scope, $http, $routeParams){
		$http
		.post('http://localhost:3000/#/users/', $scope.newUser)
		.then(function(response){
			$scope.users=$scope.response.user;	
			console.log($scope.newUser);
			// newUser();
		});
	}

	function updateUser($scope, $http, $routeParams){
		$http
		.put('http://localhost:3000/#/users/:id' + $routeParams.id)
		.then(function(response){
			$scope.users=$scope.response.user;	
			console.log($scope.user);
			// updateUser();
		});
	}
	
	function deleteUser($scope, $http, $routeParams){
		$http
		.delete('http://localhost:3000/#/users/:id' + $routeParams.id)
		.then(function(response){
			$scope.users=$scope.response.user;	
			console.log($scope.user);
			// deleteUser();
		});
	}
