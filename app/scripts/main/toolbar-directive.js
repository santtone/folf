'use strict';

angular.module('folf')
  .directive('folfToolbar', ['$rootScope', function ($rootScope) {
    return {
      restrict: 'E',
      replace: false,
      scope: {
        home: '=?',
        title: '@'
      },
      link: function ($scope) {

        $scope.$watch('title', function(title){
          $rootScope.toolbar.title = title;
        });

        $rootScope.toolbar.home = _.isUndefined($scope.home) ? false : $scope.home;

      }
    };
  }]);