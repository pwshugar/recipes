angular.module('RecipeApp')
	.controller('NavBarCtrl', function ($scope, $location, RecipeService, GroceryService){
		$scope.buttonView = true;

		$scope.clicked = function(state){
			if (state === "Add") addRecipe();
			else if (state === "Clear") clearGroceries();
		};

		function addRecipe(){
			GroceryService.add(RecipeService.get());
			$location.path("/")
		};

		function clearGroceries(){
			GroceryService.clear();
		};

	});




