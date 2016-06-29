angular.module('RecipeApp', ["ngRoute", "mobile-angular-ui"])
  .run(function($rootScope){
    angular.extend($rootScope, {
      typeSelections: ["vegetable", "fruit", "meat", "other"],
      qtySelections: [1,2,3,4,5,6,7,8,9,10]
    });
  })
	.config(function($routeProvider){
    var resolves = {
      recipes: function(RecipeService){
        if (RecipeService.getAll()) return;
        return RecipeService.setAll();
      },
      currentRecipe: function(GroceryService){
        if (GroceryService.get()) return;
        return GroceryService.set();
      }
    };
    $routeProvider
     //  .when('/', {
     //  // ...
     //  })
			.when('/', {
        templateUrl: 'views/recipes.html',
        controller: "RecipeCtrl",
        resolve: resolves
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: "ListCtrl",
        resolve: resolves
      })
      .when('/recipe/:recipe', {
        templateUrl: 'views/recipeDetails.html',
        controller: "RecipeDetailsCtrl",
        resolve: resolves
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: "NewCtrl",
        resolve: resolves
      })

      // .when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });