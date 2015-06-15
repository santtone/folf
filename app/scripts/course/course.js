'use strict';

angular.module('folf')
  .controller('CourseCtrl', ['$scope', '$state', 'courseService', '$stateParams',
    function ($scope, $state, courseService, $stateParams) {

      $scope.course = {};

      var id = $stateParams.courseId;

      courseService.get(id).then(function (courses) {
        $scope.course = _.first(courses);
      });

    }]);
