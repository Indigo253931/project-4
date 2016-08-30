// Create an Angular module
var app = angular.module('EcoViews', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'mainController'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
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
	.when('products', {
		templateUrl: 'templates/productIndex.html',
		controller: 'ProductsController'
	})
	.when('products/:id', {
		templateUrl: 'templates/productShow.html',
		controller: 'ProductsController'
	})
	.when('products/', {
		templateUrl: 'templates/productNew.html',
		controller: 'ProductsController'
	})
	.when('sectors', {
		templateUrl: 'templates/productIndex.html',
		controller: 'SectorsController'
	})
	.when('sectors/:id', {
		templateUrl: 'templates/productShow.html',
		controller: 'sectorsController'
	});
});
	app.controller('mainController', ['$scope', function($scope){
	$scope.message = 'Welcome to EcoViews!';
}]);

