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
ProductsUpdateController.$inject = ['$window','$scope', '$http', '$routeParams'];
ProductsDeleteController.$inject = ['$window', '$scope', '$http', '$routeParams'];

function ProductsController($scope, $http, $routeParams){
	function getProducts(){
		$http
		.get('/products/')
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
		.post('/products/', $scope.newProduct)
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
	console.log('ProductsShowController' + $routeParams.id);
	function getProduct (){
		$http
		.get('/products/' + $routeParams.id)
		.then(function(response){
			console.log(response);
			$scope.product = response.data.product;
		});
	}	
	getProduct();
}
function ProductsUpdateController($window, $scope, $http, $routeParams){
	$scope.updateProduct = {product_id : $routeParams.id };
	$scope.updateProduct.product_name = '';
	$scope.updateProduct.company_name = '';
	$scope.updateProduct.image = '';
	$scope.updateProduct.comments = '';
	console.log($scope.updateProduct);
		$scope.saveProduct = function(){
			$http
			.put('/products/' + $routeParams.id + '/edit', $scope.updateProduct, {} )
			.then(function(response){
			// 	if (response.status == 200){
			// 		 $window.location.href = '/#/products/edit/' + response.data.product._id;
			// }
				$scope.products = response.data.product;	
				console.log(response);
		});
	};
}
function ProductsDeleteController($window, $scope, $http, $routeParams){
	$scope.deleteProduct = function (){
		$http
		.delete('/products/' + $routeParams.id)
		.then(function(response){
			$scope.products = response.data.product;	
		});
	};
}