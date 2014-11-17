angular.module('RecipeApp', [])
	.controller('RecipeCtrl', function ($scope) {
	  $scope.recipes = window.recipes;
	  $scope.recipeList = Object.keys($scope.recipes);
	  $scope.recipeList.unshift("Select");
	  $scope.totalRecipe = {};
	  $scope.selected = "Select";

	  $scope.view = function(){
	  	if ($scope.selected === "Select") return;
	  	if ($scope.recipeList[0] === "Select") $scope.recipeList = $scope.recipeList.slice(1, $scope.recipeList.length)
	  	$scope.currentRecipe = angular.copy($scope.recipes[$scope.selected]);
	  	$scope.currentIngredients = Object.keys($scope.currentRecipe);
	  };

	  $scope.remove = function(ing){
			$scope.currentRecipe[ing].qty = $scope.currentRecipe[ing].qty - 1;
			if (!$scope.currentRecipe[ing].qty){
				delete $scope.currentRecipe[ing]
			}
	  };

	  $scope.add = function(){
	  	for (var k in $scope.currentRecipe){
	  		if ($scope.totalRecipe[k]){
					$scope.totalRecipe[k].qty += $scope.currentRecipe[k].qty;
	  		} else {
					$scope.totalRecipe[k] = $scope.currentRecipe[k];
	  		}
	  	}
	  	$scope.currentRecipe = {};
	  	$scope.currentIngredients = null;
	  	$scope.totalIngredients = Object.keys($scope.totalRecipe);
	  	findTypes();
	  };

	  function findTypes(){
	  	var types = {};
	  	for (var k in $scope.totalRecipe){
	  		types[$scope.totalRecipe[k].type] = true;
	  	}
	  	$scope.types = Object.keys(types);
	  };
	});




