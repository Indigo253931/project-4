// Create an Angular module
var app = angular.module('EcoRev', ['ngRoute']);

console.log('Angular is working.');

app.config(function($routeProvider){
	$routeProvider
	.when('/products', {
		templateUrl: 'templates/productIndex.html',
		controller: 'ProductsController'
	})
	.when('/products/:id', {
		templateUrl: 'templates/productShow.html',
		controller: 'ProductsController'
	})
	.when('/products/new', {
		templateUrl: 'templates/productNew.html',
		controller: 'ProductsController'
	})
	.when('/signup', {
		templateUrl: 'templates/signup.html',
		controller: 'UsersController'
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'UsersController'
	})
	.when('/profile', {
		templateUrl: 'templates/profile.html',
		controller: 'UsersController'
	})
	.when('/sectors', {
		templateUrl: 'templates/productIndex.html',
		controller: 'SectorsController'
	})
	.when('/sectors/:id', {
		templateUrl: 'templates/productShow.html',
		controller: 'SectorsController'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	});
});


