app.controller('SectorsController', SectorsController);


				/////////////////
				// CONTROLLERS //
				/////////////////

	SectorsController.$inject = ['$scope', '$http', '$routeParams'];


	function getSectors($scope, $http){

		var sectors = Sector.get('http://localhost:3000/#/sectors/')
		.then(function(response){
			$scope.sectors=$scope.response.sectors;
			console.log($scope.sectors);
		});
	}

	function getSector($scope, $http, $routeParams){
		$http
		.get('http://localhost:3000/#/sectors/:id' + $routeParams.id)
		.then(function(response){
			$scope.sectors=$scope.response.sector;
			console.log($scope.sector);
		});
	}