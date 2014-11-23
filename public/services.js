angular.module('RecipeApp')
	.service('GroceryService', function($rootScope, $http){
		var currentList;

		this.set = function(){
			return $http.get("/data/current").success(function(data){
			  console.log("Current Recipe", data)
		  	currentList = data;
		  });
		};
		
		this.add = function(recipe){
			var o = recipe.ingredients;
			for (var k in o){
				if (currentList[k]){
					currentList[k].qty += o[k].qty;
				} else {
					currentList[k] = o[k];
				}
			}
			return $http.post("/data/current", currentList).success(function(data){
			  console.log("Update List", data);
		  });
		};
		
		this.get = function(){
			return currentList;
		};		

		this.clear = function(){
			currentList = {_id: currentList._id, user: "nams"};
			return $http.post("/data/current", currentList).success(function(data){
			  console.log("Clear List", data);
		  });
		};

	})

	.service('RecipeService', function($rootScope, $http){
		var recipes;
		var currentRecipe = {};

		this.setAll = function(){
		  return $http.get("/data/recipes").success(function(data){
			  console.log("All Recipes", data)
		  	recipes = data;
		  	return data;
		  });
		};

		this.getAll = function(){
			return recipes;
		};
		
		this.set = function(recipe){
			currentRecipe = recipe;
		};
		
		this.get = function(){
			return currentRecipe;
		};

		this.remove = function(ingredient){
			var ing = currentRecipe.ingredients[ingredient];
			if (ing){
				if (ing.qty > 1){
					ing.qty = ing.qty - 1;
				} else {
					delete currentRecipe.ingredients[ingredient];
				}
			}
			return currentRecipe;
		};

	});













