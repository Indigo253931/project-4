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

		 var products = [];

 var sectors = [];

// ALL_PRODUCTS = 
// Seed Data

products.push([
{
		'sector': 'Construction',
		'industry': 'Building Materials & Equipment',
		'company_name': 'American limetechnology',
		'product_name': 'Breathe Natual Fibre Insulation',
		'comment': ['Insulation product made from premium grade hemp and flax fibrewhich create a naturally efficient thermal and acoustic insulation product for walls, floors and roofs.'],
		'image': 'http://americanlimetechnology.com/wp-content/uploads/2012/01/Breathe-logo-100x240.png',
	
	},
{
		'sector': 'Misc',
		'industry': ['Food & Beverage'],
		'company_name': 'Dr. Bronners',
		'product_name': 'Whole Kernel Virgin Coconut Oil',
		'comment': ['Certified Fair Trade by IMO', 'Certified Kosher by OK Kosher', 
		'Non-GMO verified by the NON-GMO Project', 'Certified Organic by the Oregon Tilth and USDA National Organic Program', 
		'Ceritfied vegan by Vegan Action'],
		'image': 'https://www.drbronner.com/mm5/graphics/00000002/organic-coconutoil-whole-14oz_2.jpg'
}
]);


sectors.push = ([
{
	sector: 'Agribusiness',
	industries: ['Crop Production & Basic Processing', 'Tobacco', 'Dairy', 
	'Poultry & Eggs', 'Livestock', 'Agricultural Services & Products', 
	'Food Processing & Sales', 'Forestry & Forest Products']
}, 
{
	sector: 'Communications/Electronics',
	industries: ['Printing & Publishing', 'TV/Movies/Music', 
	'Telephone Utilities', 'Telecom Services & Equipment', 
	'Electronics Manufacturing & Equipment', 'Internet']
}, 
{
	sector: 'Construction',
	industries: ['General Contractors', 'Home Builders', 
	'Special Trade Contractors','Construction Services', 
	'Architectural Services', 'Building Materials & Equipment']
}, 
{
	sector: 'Energy & Natural Resources',
	industries: ['Oil & Gas', 'Mining', 'Alternative Energy Production & Services',
	'Electric Utilities', 'Waste Management']
}, 
{
	sector: 'Misc Buisness',
	industries: ['Buisness Associations', 'Food & Beverage', 'Beer, Wine & Liquor',
	'Retail Sales', 'Miscellaneous Services', 'Buisness Services', 'Recreation / Live Entertainment',
	'Casinos / Gambling', 'Lodging / Tourism', 'Chemical & Related Manufacturing', 'Steel Production', 
	'Misc Manufacturing & Distributing', 'Textiles']
}, 
{
	sector: 'Transportation',
	industries: ['Air Transport', 'Automotive', 'Trucking',
	'Railroads', 'Sea Transport']
}
]);