angular.module('folf')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/user/login");

    $stateProvider
      .state('login', {
        url: "/user/login",
        templateUrl: "scripts/user/login.html",
        controller: 'LoginCtrl'
      })

  });
