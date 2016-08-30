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
	.when('/about', {
		templateUrl: 'templates/about.html'
	})
	.when('/signup', {
		templateUrl: 'templates/signup.html',
		controller: 'NewUserController'
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginUserController'
	})
	.when('/profile', {
		templateUrl: 'templates/profile.html',
		controller: 'ProfileController'
	})
	.when('/sectors', {
		templateUrl: 'templates/productIndex.html',
		controller: 'SectorsIndexController'
	})
	.when('/sectors/:id', {
		templateUrl: 'templates/productShow.html',
		controller: 'SectorsShowController'
	});
});


