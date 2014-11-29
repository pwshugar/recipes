angular.module('RecipeApp')
	.controller('NewCtrl', function ($scope, $rootScope, RecipeService){
		$rootScope.addNewButton = "Add Recipe";

	  // $scope.newRecipe = { 
	 	// 	"name": "mexican",
	 	// 	"title": "Mexican",
	 	// 	"ingredients": {
		 // 		"bell pepper": { qty: 1, type: "vegetable" },
		 // 		"avocado": { qty: 2, type: "vegetable" },
		 // 		"tomato": { qty: 1, type: "vegetable" },
		 // 		"beans": { qty: 1, type: "other" },
		 // 		"garlic": { qty: 1, type: "vegetable" },
		 // 		"tortilla": { qty: 1, type: "other" },
		 // 		"lime": { qty: 1, type: "fruit" },
		 // 		"chips": { qty: 1, type: "other" }
	 	//   }
	 	// };

	 	clearInput();

	 	function clearInput(){
	 		$scope.newIngredient = "";
			$scope.selectType = "vegetable";
			$scope.selectQty = "1";
	 	};

		$scope.remove = function(ingredient){
			var ing = $scope.newRecipe.ingredients[ingredient];
			if (ing){
				if (ing.qty > 1){
					ing.qty = ing.qty - 1;
				} else {
					delete $scope.newRecipe.ingredients[ingredient];
				}
			}
		};

		$scope.add1 = function(){
			if ($scope.newTitle){
				$scope.newRecipe = {
					title: $scope.newTitle,
					ingredients: {}
				}
			}
		};

		$scope.add2 = function(){
		  if ($scope.newIngredient){
				var ing = $scope.newRecipe.ingredients[$scope.newIngredient];
				if (ing){
					ing.qty = (parseInt(ing.qty) + parseInt($scope.selectQty)) + "";
					ing.type = $scope.selectType;
				} else {
					$scope.newRecipe.ingredients[$scope.newIngredient] = {
						type: $scope.selectType,
						qty: $scope.selectQty
					};
				}
				clearInput();
		  }
		};

		$rootScope.$on("addNewRecipe", function(){
			if ($scope.newRecipe){
			  RecipeService.addNew($scope.newRecipe);
			}
		});

	});




