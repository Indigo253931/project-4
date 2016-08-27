// Create an Angular module
var app = angular.module('EcoViews', ['ngRoute'])
.controller('ProductsIndexController', ProductsIndexController)
.controller('ProductsShowController', ProductsShowController)
.controller('ProductsNewController', ProductsNewController);

	app.config(function ($routeProvider){
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
			templateUrl: 'templates/products-index.html',
			controller: 'ProductsIndexCtrl'
		})
		.when('products/:name', {
			templateUrl: 'templates/products-show.html',
			controller: 'ProductsShowCtrl'
		})
		.when('products/new', {
			templateUrl: 'templates/products-new.html',
			controller: 'ProductsNewCtrl'
		});
	});

				/////////////////
				// CONTROLLERS //
				/////////////////

	ProductsIndexController.$inject = ['$scope', '$http'];
	function ProductsIndexController($scope, $http){
		$http.get('http://localhost:3000/api/products')
		.then(function(response){
			$scope.products=response.product;
			console.log($scope.products);
		});
	}

	ProductsShowController.$inject = ['$scope', '$http', '$routeParams'];
	function ProductsShowController($scope, $http, $routeParams){
		$http.get('http://localhost:3000/api/products/' + $routeParams.name)
		.then(function(response){
			$scope.product=response.product;
			console.log($scope.product);
		});
	}

	ProductsNewController.$inject = ['$scope', '$http', '$routeParams'];
	function ProductsNewController($scope, $http, $routeParams){
		$http.post('http://localhost:3000/api/products/', newProduct);
			console.log(newProduct);
		}