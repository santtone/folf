'use strict';

angular.module('folf')
  .config(['$stateProvider', '$urlRouterProvider', 'stateHelperProvider',
    function ($stateProvider, $urlRouterProvider, stateHelperProvider) {

      $urlRouterProvider.otherwise('/folf/main');

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
            },
            {
              name: 'courseList',
              url: '/courseList',
              templateUrl: 'scripts/course/course-list.html',
              controller: 'CourseListCtrl',
              children:[
                {
                  name: 'course',
                  url: '/course/:courseId',
                  templateUrl: 'scripts/course/course.html',
                  controller: 'CourseCtrl',
                  children:[
                    {
                      name: 'edit',
                      url: '/edit',
                      templateUrl: 'scripts/course/course-edit.html',
                      controller: 'CourseEditCtrl'
                    }
                  ]
                },
                {
                  name: 'add',
                  url: '/add',
                  templateUrl: 'scripts/course/course-edit.html',
                  controller: 'CourseEditCtrl'
                }
              ]
            }
          ]
        });

    }]);

angular.module('folf')
  .run(['$rootScope', '$state',
    function ($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function (event, toState) {
          if (_.isEqual(toState.name, 'folf')) {
            event.preventDefault();
            $state.go('folf.main');
          }
        });
    }]);