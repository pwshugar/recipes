angular.module('RecipeApp')
	.controller('NavBarCtrl', function ($scope, $rootScope, $location, RecipeService, GroceryService){
		$scope.buttonView = true;

		$scope.clicked = function(state){
			if (state === "Add") addList();
			else if (state === "Clear") clearGroceries();
			else if (state === "New") newRecipe();
			else if (state === "Add Recipe") addNewRecipe();
		};

		function addList(){
			GroceryService.add(RecipeService.get());
			$location.path("/");
		};

		function clearGroceries(){
			GroceryService.clear();
		};

		function newRecipe(){
			$location.path("/new");
		};

		function addNewRecipe(){
			$rootScope.$broadcast("addNewRecipe");
		};

	});




