/////////////////
// CONTROLLERS //
/////////////////
app.controller('ProductsController', ProductsController)
.controller('ProductsShowController', ProductsShowController)
.controller('ProductsNewController', ProductsNewController)
.controller('ProductsUpdateController', ProductsUpdateController)
.controller('ProductsDeleteController', ProductsDeleteController);

ProductsController.$inject = ['$scope', '$http', '$routeParams'];
ProductsShowController.$inject = ['$scope', '$http', '$routeParams'];
ProductsNewController.$inject = ['$window', '$scope', '$http', '$routeParams'];
ProductsUpdateController.$inject = ['$scope', '$http', '$routeParams'];
ProductsDeleteController.$inject = ['$scope', '$http', '$routeParams'];

function ProductsController($scope, $http, $routeParams){
	function getProducts(){
		$http
		.get('http://localhost:3000/products/')
		.then(function(response){
			$scope.products = response.data.products;
			console.log($scope.products);
		});
	}
	getProducts();
}

function ProductsNewController($window, $scope, $http, $routeParams){	
	console.log('ProductsNewController');
	$scope.createProduct = function(){
		$http
		.post('http://localhost:3000/products/', $scope.newProduct)
		.then(function(response){
			if (response.status == 200){
				 $window.location.href = '/#/products/' + response.data.product._id;
			}
			$scope.products = response.data.product;	
			console.log(response);
		});
	};
}
function ProductsShowController($scope, $http, $routeParams){
	console.log('ProductsShowController'  + $routeParams.id);
	function getProduct (){
		$http
		.get('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.product = response.data.product;
		});
	}	
	getProduct();
}
function ProductsUpdateController($scope, $http, $routeParams){
	$scope.updateProduct = function(){
		$http
		.put('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.products = response.data.product;	
			console.log($scope.updateProduct);
		});
	};
	$scope.updateProduct();
}
function ProductsDeleteController($scope, $http, $routeParams){
	$scope.deleteProduct = function (){
		$http
		.delete('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.products = response.data.product;	
			console.log($scope.deleteProduct);
		});
	};
	$scope.deleteProduct();
}