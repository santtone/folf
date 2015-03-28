'use strict';

angular.module('folf')
  .controller('CourseCtrl', ['$scope', '$state', 'courseService', function ($scope, $state, courseService) {

    $scope.course = {};

    $scope.submit = function () {
      courseService.add($scope.course).then(function () {
        $state.go('^');
      });
    };
  }]);
