/////////////////
// CONTROLLERS //
/////////////////
app.controller('ProductsController', ProductsController);



ProductsController.$inject = ['$scope', '$http', '$routeParams'];
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
	function getProduct(){
		$http
		.get('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.product = response.data.product;
			console.log($scope.product);
		});
	}
	getProduct();
	function newProduct(){
		$http
		.post('http://localhost:3000/products/', $scope.newProduct)
		.then(function(response){
			$scope.products = response.data.product;	
			console.log($scope.newProduct);
			// newProduct();
		});
	}
	// newProduct();
	function updateProduct(){
		$http
		.put('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.products = response.data.product;	
			console.log($scope.product);
			// updateProduct();
		});
	}
	// updateProduct();
	function deleteProduct(){
		$http
		.delete('http://localhost:3000/products/' + $routeParams.id)
		.then(function(response){
			$scope.products = response.data.product;	
			console.log($scope.product);
			// deleteProduct();
		});
	}
	// deleteProduct();
}
