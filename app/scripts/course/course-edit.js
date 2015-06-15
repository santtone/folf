'use strict';

angular.module('folf')
  .controller('CourseEditCtrl', ['$scope', '$state', 'courseService', '$stateParams',
    function ($scope, $state, courseService, $stateParams) {

    $scope.course = {};

    var id = $stateParams ? $stateParams.courseId : null;

    if (id) {
      courseService.get(id).then(function (courses) {
        $scope.course = _.first(courses);
      });
    }

    $scope.submit = function () {
      courseService.add($scope.course).then(function () {
        $state.go('^');
      });
    };

  }]);
