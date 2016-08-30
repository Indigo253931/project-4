/////////////////
// CONTROLLERS //
/////////////////
app.controller('SectorsController', SectorsController);

SectorsController.$inject = ['$scope', '$http', '$routeParams'];
function SectorsController($scope, $http, $routeParams){
	function getSectors(){
		$http
		.get('http://localhost:3000/sectors')
		.then(function(response){
			$scope.sectors = response.data.sectors;
			console.log($scope.sectors);
		});
	}
	getSectors();
	function getSector(){
		$http
		.get('http://localhost:3000/sectors/:id' + $routeParams.id)
		.then(function(response){
			$scope.sectors = response.data.sector;
			console.log($scope.sector);
		});
	}
	getSector();
}
