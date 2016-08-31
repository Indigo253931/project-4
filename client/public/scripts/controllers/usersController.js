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
UsersNewController.$inject = ['$scope', '$http', '$routeParams'];
UsersUpdateController.$inject = ['$scope', '$http', '$routeParams'];
UsersDeleteController.$inject = ['$scope', '$http', '$routeParams'];

function UsersController($scope, $http, $routeParams){
	$scope.getUsers = function(){
		$http
		.get('http://localhost:3000/users/')
		.then(function(response){
			$scope.users=response.data.users;
			console.log($scope.users);
		});
	};
}

function UsersShowController($scope, $http, $routeParams){
	$scope.getUser =function (){
		$http
		.get('http://localhost:3000/users/' + $routeParams.id)
		.then(function(response){
			$scope.users=response.data.user;
			console.log($scope.showUser);
		});
	};
}

function UsersNewController($scope, $http, $routeParams){
	$scope.createUser=function(){
		$http
		.post('http://localhost:3000/users/', $scope.newUser)
		.then(function(response){
			$scope.users=response.data.user;	
			console.log($scope.newUser);
			// newUser();
		});
	};
}

function UsersUpdateController($scope, $http, $routeParams){
	$scope.editUser=function(){
		$http
		.put('http://localhost:3000/users/' + $routeParams.id)
		.then(function(response){
			$scope.users=response.data.user;	
			console.log($scope.updateUser);
			// updateUser();
		});
	};
}

function UsersDeleteController($scope, $http, $routeParams){
	$scope.destroyUser=function(){
		$http
		.delete('http://localhost:3000/users/' + $routeParams.id)
		.then(function(response){
			$scope.users=response.data.user;	
			console.log($scope.deleteUser);
			// deleteUser();
		});
	};
}
