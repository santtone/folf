'use strict';

angular.module('folf')
  .controller('CourseListCtrl', ['$scope', '$state', 'courseService', function ($scope, $state, courseService) {

    $scope.courses = [];

    courseService.getAll().then(function(courses){
      $scope.courses = courses;
    });

    $scope.add = function(){
      $state.go('folf.courseList.courseAddition');
    };

  }]);
