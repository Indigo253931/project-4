/////////////////
// CONTROLLERS //
/////////////////
app.controller('ProductsController', ProductsController)
.controller('ProductsNewController', ProductsNewController)
.controller('ProductsUpdateController', ProductsUpdateController)
.controller('ProductsDeleteController', ProductsDeleteController);

ProductsController.$inject = ['$scope', '$http', '$routeParams'];
ProductsNewController.$inject = ['$scope', '$http', '$routeParams'];
ProductsUpdateController.$inject = ['$scope', '$http', '$routeParams'];
ProductsDeleteController.$inject = ['$scope', '$http', '$routeParams'];

function ProductsController($scope, $http, $routeParams){
	function getProducts(){
		$http
		.get('http://localhost:3000/products/')
		.then(function(response){
			// console.log(response);
			$scope.products = response.data.products;
			console.log($scope.products);
		});
	}
	getProducts();
	$scope.getProduct = function(){
		console.log($scope.getProduct);
		$http
		.get('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.product = response.data.product;
			console.log($scope.getProduct);
		});
	};
	// getProduct();
}
function ProductsNewController($scope, $http, $routeParams){	
	// $scope.newProduct = newProduct;
	// function newProduct()
	$scope.createProduct = function(){
		console.log($scope.newProduct);
		$http
		.post('http://localhost:3000/products/', $scope.newProduct)
		.then(function(response){
			$scope.products = response.data.product;	
			console.log($scope.newProduct);
		});
	};
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
	// updateProduct();
}
function ProductsDeleteController($scope, $http, $routeParams){
	$scope.deleteProduct = function (){
		$http
		.delete('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.products = response.data.product;	
			console.log($scope.deleteProduct);
			// deleteProduct();
		});
	};
	// deleteProduct();
}