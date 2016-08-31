/////////////////
// CONTROLLERS //
/////////////////
app.controller('SectorsController', SectorsController)
.controller('SectorsShowController', SectorsShowController);

SectorsController.$inject = ['$scope', '$http', '$routeParams'];
SectorsShowController.$inject = ['$scope', '$http', '$routeParams'];

function SectorsController($scope, $http, $routeParams){
	$scope.getSectors=function(){
		$http
		.get('http://localhost:3000/sectors/')
		.then(function(response){
			$scope.sectors = response.data.sectors;
			console.log($scope.sectors);
		});
	};
}
	// getSectors();
function SectorsShowController($scope, $http, $routeParams){
	$scope.getSector=function(){
		$http
		.get('http://localhost:3000/sectors/' + $routeParams.id)
		.then(function(response){
			$scope.sectors = response.data.sector;
			console.log($scope.showSector);
		});
	};
}
	// getSector();