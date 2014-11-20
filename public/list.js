angular.module('RecipeApp')
	.controller('ListCtrl', function ($scope, $rootScope, GroceryService){
		$rootScope.addNewButton = false;
		$scope.groceries = GroceryService.get();
	});




