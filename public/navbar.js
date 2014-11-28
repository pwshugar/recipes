angular.module('RecipeApp')
	.controller('NavBarCtrl', function ($scope, $location, RecipeService, GroceryService){
		$scope.buttonView = true;

		$scope.clicked = function(state){
			if (state === "Add") addRecipe();
			else if (state === "Clear") clearGroceries();
			else if (state === "New") newRecipe();
		};

		function addRecipe(){
			GroceryService.add(RecipeService.get());
			$location.path("/");
		};

		function clearGroceries(){
			GroceryService.clear();
		};

		function newRecipe(){
			$location.path("/new");
		};

	});




