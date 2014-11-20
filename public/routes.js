angular.module('RecipeApp', ["ngRoute", "mobile-angular-ui"])
	.config(function($routeProvider){
    $routeProvider
     //  .when('/', {
     //  // ...
     //  })
			.when('/', {
        templateUrl: 'views/recipes.html'
      })
      .when('/list', {
        templateUrl: 'views/list.html'
      })
      .when('/recipe/:recipe', {
        templateUrl: 'views/recipeDetails.html'
      })

      // .when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });