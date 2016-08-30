app.controller('ProductsController', ProductsController);

				/////////////////
				// CONTROLLERS //
				/////////////////

ProductsController.$inject = ['$scope', '$http', '$routeParams'];
function ProductsController($scope, $http, $routeParams){
	function getProducts(){
		$http.get('http://localhost:3000/products')
		.then(function(response){
			console.log(response);
				$scope.products=response.data.products;
				console.log($scope.products);
			});

	}
	getProducts();
	function getProduct($scope, $http, $routeParams){
		$http
		.get('http://localhost:3000/products/:id' + $routeParams.id)
		.then(function(response){
			$scope.products=response.product;
			console.log($scope.product);
		});
	}

	function newProduct($scope, $http, $routeParams){
		$http
		.post('http://localhost:3000/products/', $scope.newProduct)
		.then(function(response){
			$scope.products=response.product;	
			console.log($scope.newProduct);
			// newProduct();
		});
	}

	function updateProduct($scope, $http, $routeParams){
		$http
		.put('http://localhost:3000/products/:id' + $routeParams.id)
		.then(function(response){
			$scope.products=response.product;	
			console.log($scope.product);
			// updateProduct();
		});
	}
	
	function deleteProduct($scope, $http, $routeParams){
		$http
		.delete('http://localhost:3000/products/:id' + $routeParams.id)
		.then(function(response){
			$scope.products=response.product;	
			console.log($scope.product);
			// deleteProduct();
		});
	}

	}
