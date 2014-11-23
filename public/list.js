angular.module('RecipeApp')
	.controller('ListCtrl', function ($scope, $rootScope, GroceryService){
		$rootScope.addNewButton = "Clear";

		$rootScope.$on('clearList', function(){
			init();
		});

		init();

		function init(){
			$scope.groceries = GroceryService.get();
			$scope.vegetable = [];
			$scope.fruit = [];
			$scope.other = [];
			sortGroceries();
		};		

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

		$scope.clickGrocery = function(ing){
			$scope.groceries[ing].clicked = !$scope.groceries[ing].clicked;
			GroceryService.update($scope.groceries);
			console.log($scope.groceries)
		};

	});




