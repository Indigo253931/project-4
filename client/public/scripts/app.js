// Create an Angular module
var app = angular.module('EcoViews', ['ngRoute'])
.controller('ProductIndexController', ProductIndexController)
.controller('ProductShowController', ProductShowController)
.controller('ProductNewController', ProductNewController)
.controller('SectorIndexController', SectorIndexController)
.controller('SectorShowController', SectorShowController)

.config([('$routeProvider', 
		function($routeProvider){
$routeProvider
		.when('/', {
			templateUrl: 'index.html',
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
		})
		.when('/signup', {
			templateUrl: 'templates/signup.html',
		})
		.when('/login', {
			templateUrl: 'templates/login.html',
		})
		.when('/profile', {
			templateUrl: 'templates/profile.html',
		})
		.when('products', {
			templateUrl: 'templates/productIndex.html',
			controller: 'ProductIndexController'
		})
		.when('products/:id', {
			templateUrl: 'templates/productShow.html',
			controller: 'ProductShowController'
		})
		.when('products/new', {
			templateUrl: 'templates/productNew.html',
			controller: 'ProductNewController'
		})
		.when('/products/sectors', {
			templateUrl: 'templates/productIndex.html',
			controller: 'SectorIndexController'
		})
		.when('products/sectors/:id', {
			templateUrl: 'templates/productShow.html',
			controller: 'SectorShowController'
		});

	})
	]);

				/////////////////
				// CONTROLLERS //
				/////////////////

					// Products

	ProductIndexController.$inject = ['$scope', '$http'];
	function ProductIndexController($scope, $http){
		$http.get('http://localhost:3000/api/products')
		.then(function(response){
			$scope.products=$scope.response.products;
			console.log($scope.products);
		});
	}

	ProductShowController.$inject = ['$scope', '$http', '$routeParams'];
	function ProductShowController($scope, $http, $routeParams){
		$http.get('http://localhost:3000/api/products/:id' + $routeParams.id)
		.then(function(response){
			$scope.products=$scope.response.product;
			console.log($scope.product);
		});
	}

	ProductNewController.$inject = ['$scope', '$http', '$routeParams'];
	function ProductNewController($scope, $http, $routeParams){
		$http.post('http://localhost:3000/api/products/', $scope.newProduct);
			console.log($scope.newProduct);
			newProduct();
		}

					// Sectors

	SectorIndexController.$inject = ['$scope', '$http'];
	function SectorIndexController($scope, $http){
		$http.get('http://localhost:3000/api/products/sectors')
		.then(function(response){
			$scope.sectors = $scope.response.sectors;
			console.log($scope.sectors);
		});
	}

	SectorShowController.$inject = ['$scope', '$http', '$routeParams'];
	function SectorShowController($scope, $http, $routeParams){
		$http.get('http://localhost:3000/api/products/sectors/:id' + $routeParams.id)
		.then(function(response){
			$scope.sectors=$scope.response.sector;
			console.log($scope.sector);
		});
	}

