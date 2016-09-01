/////////////////
// CONTROLLERS //
/////////////////
app.controller('SectorsController', SectorsController)
.controller('SectorsShowController', SectorsShowController);

SectorsController.$inject = ['$scope', '$http', '$routeParams'];
SectorsShowController.$inject = ['$scope', '$http', '$routeParams'];

function SectorsController($scope, $http, $routeParams){
	function getSectors(){
		$http
		.get('/sectors/')
		.then(function(response){
			$scope.sectors = response.data.sectors;
			console.log($scope.sectors);
		});
	}
	getSectors();
}
	// getSectors();
function SectorsShowController($scope, $http, $routeParams){
	function getSector (){
		$http
		.get('/sectors/' + $routeParams.id)
		.then(function(response){
			console.log(response);
			$scope.sector = response.data.sector;
		});
	} getSector();
}
	// getSector();