/////////////////
// CONTROLLERS //
/////////////////
app.controller('UsersController', UsersController);

UsersController.$inject = ['$scope', '$http', '$routeParams'];
function UsersController($scope, $http, $routeParams){
	function getUsers(){
		$http
		.get('http://localhost:3000/users')
		.then(function(response){
			$scope.users=response.data.users;
			console.log($scope.users);
		});
	}
	function getUser(){
		$http
		.get('http://localhost:3000/users/:id' + $routeParams.id)
		.then(function(response){
			$scope.users=response.data.user;
			console.log($scope.user);
		});
	}
	function newUser(){
		$http
		.post('http://localhost:3000/users', $scope.newUser)
		.then(function(response){
			$scope.users=response.data.user;	
			console.log($scope.newUser);
			// newUser();
		});
	}
	function updateUser(){
		$http
		.put('http://localhost:3000/users/:id' + $routeParams.id)
		.then(function(response){
			$scope.users=response.data.user;	
			console.log($scope.user);
			// updateUser();
		});
	}
	function deleteUser(){
		$http
		.delete('http://localhost:3000/users/:id' + $routeParams.id)
		.then(function(response){
			$scope.users=response.data.user;	
			console.log($scope.user);
			// deleteUser();
		});
	}
}
