angular.module('RecipeApp')
	.controller('ListCtrl', function ($scope, $rootScope, GroceryService){
		$rootScope.addNewButton = false;
		$scope.groceries = GroceryService.get();
		console.log("?", $scope.groceries)

		$scope.vegetable = [];
		$scope.fruit = [];
		$scope.other = [];
		sortGroceries();

		
	  function sortGroceries(){
			for (var k in $scope.groceries){
				if ($scope.groceries[k].type){
				  $scope[$scope.groceries[k].type].push(k);
				}
			}
			sortByQty($scope.vegetable);
			sortByQty($scope.fruit);
			sortByQty($scope.other);
		};

		function sortByQty(arr){
			return arr.sort(function(a, b){
				return $scope.groceries[a].qty - $scope.groceries[b].qty
			});
		};

	});




