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
		controller: 'ProductsShowController'
	})
	.when('/products/new', {
		templateUrl: 'templates/productNew.html',
		controller: 'ProductsNewController'
	})
	.when('/signup', {
		templateUrl: 'templates/signup.html',
		controller: 'UsersNewController'
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'UsersShowController'
	})
	.when('/profile', {
		templateUrl: 'templates/profile.html',
		controller: 'UsersUpdateController'
	})
	.when('/sectors', {
		templateUrl: 'templates/productIndex.html',
		controller: 'SectorsController'
	})
	.when('/sectors/:id', {
		templateUrl: 'templates/productShow.html',
		controller: 'SectorsShowController'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	});
});


