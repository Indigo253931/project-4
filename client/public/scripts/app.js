// Create an Angular module
var app = angular.module('EcoViews', ['ngRoute'])

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
			controller: 'usersController'
		})
		.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'usersController'
		})
		.when('/profile', {
			templateUrl: 'templates/profile.html',
			controller: 'usersController'
		})
		.when('products', {
			templateUrl: 'templates/productIndex.html',
			controller: 'productsController'
		})
		.when('products/:id', {
			templateUrl: 'templates/productShow.html',
			controller: 'productsController'
		})
		.when('products/new', {
			templateUrl: 'templates/productNew.html',
			controller: 'productsController'
		})
		.when('sectors', {
			templateUrl: 'templates/productIndex.html',
			controller: 'sectorsController'
		})
		.when('sectors/:id', {
			templateUrl: 'templates/productShow.html',
			controller: 'sectorsController'
		});

	})
	]);
