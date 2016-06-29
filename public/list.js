angular.module('RecipeApp')
	.controller('ListCtrl', function ($scope, $rootScope, GroceryService, $window){
		$rootScope.addNewButton = "Clear";

		$rootScope.$on('clearList', function(){
			init();
		});

		init();

		function init(){
			$scope.groceries = GroceryService.get();
			$rootScope.typeSelections.forEach(function(type){ $scope[type] = [] });
			sortGroceries();
			clearInput();
		};

		function clearInput(){
	 		$scope.newIngredient = "";
			$scope.selectType = "vegetable";
			$scope.selectQty = "1";
	 	};	

	  function sortGroceries(){
			for (var k in $scope.groceries){
				if ($scope.groceries[k].type){
				  $scope[$scope.groceries[k].type].push(k);
				}
			}
			$rootScope.typeSelections.forEach(function(type){ sortByQty($scope[type]) });
		};

		function sortByQty(arr){
			return arr.sort(function(a, b){
				return $scope.groceries[a].qty - $scope.groceries[b].qty
			});
		};

		$scope.clickGrocery = function(ing){
			$scope.groceries[ing].clicked = !$scope.groceries[ing].clicked;
			GroceryService.update($scope.groceries);
		};

		$scope.addMore = function(){
			$scope.addMoreView = false;
			if ($scope.newIngredient){
				var newAddition = {
					ingredients: {}
				};
				newAddition.ingredients[$scope.newIngredient] = { qty: $scope.selectQty, type: $scope.selectType };
				GroceryService.add(newAddition);
				init();
			}
		};

	});




