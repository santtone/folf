angular.module('folf')
  .config(['$stateProvider', '$urlRouterProvider', 'stateHelperProvider',
    function ($stateProvider, $urlRouterProvider, stateHelperProvider) {

      $urlRouterProvider.otherwise("/folf/main");

      stateHelperProvider.setNestedState(
        {
          name: 'folf',
          url: '/folf',
          templateUrl: 'scripts/main/folf.html',
          controller: 'FolfCtrl',
          children: [
            {
              name: 'main',
              url: '/main',
              templateUrl: 'scripts/main/main.html',
              controller: 'MainCtrl'
            },
            {
              name: 'map',
              url: '/map',
              templateUrl: 'scripts/map/map.html',
              controller: 'MapCtrl'
            },
            {
              name: 'profile',
              url: '/profile',
              templateUrl: 'scripts/user/profile.html',
              controller: 'ProfileCtrl'
            }
          ]
        });

    }]);
