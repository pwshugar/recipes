angular.module('RecipeApp')
	.controller('RecipeDetailsCtrl', function ($scope, $rootScope, $routeParams, RecipeService) {
		$rootScope.addNewButton = "Add";
		$scope.recipes = RecipeService.getAll();
		$scope.recipe = JSON.parse(JSON.stringify($scope.recipes[$routeParams.recipe]));
		RecipeService.set($scope.recipe);
		// $scope.ingredients = _.keys($scope.recipe.ingredients);
		// $scope.ingredients = $scope.ingredients.sort(function(a, b){
		// 	return $scope.recipe.ingredients[a].qty - $scope.recipe.ingredients[b].qty;
		// })
	  $scope.remove = function(ingredient){
	  	$scope.recipe = RecipeService.remove(ingredient);
	  }

	  $scope.removeRecipe = function(){
	  	RecipeService.removeRecipe();
	  }
	});




