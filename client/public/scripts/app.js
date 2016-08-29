// Create an Angular module
var app = angular.module('EcoViews', ['ngRoute'])
.controller('ProductIndexController', ProductIndexController)
.controller('ProductShowController', ProductShowController)
.controller('ProductNewController', ProductNewController)
.controller('ProductUpdateController', ProductUpdateController)
.controller('ProductDeleteController', ProductDeleteController)
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
		.when('sectors', {
			templateUrl: 'templates/productIndex.html',
			controller: 'SectorIndexController'
		})
		.when('sectors/:id', {
			templateUrl: 'templates/productShow.html',
			controller: 'SectorShowController'
		});

	})
	]);
