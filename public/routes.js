angular.module('RecipeApp', ["ngRoute", "mobile-angular-ui"])
	.config(function($routeProvider){
    var resolves = {
      recipes: function(RecipeService){
        if (RecipeService.getAll()) return;
        return RecipeService.setAll();
      },
      currentRecipe: function(RecipeService){
        return
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

      // .when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });