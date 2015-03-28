'use strict';

angular.module('folf')
  .controller('CourseListCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.courses = [
      {
        name: 'Urheilupuisto',
        location: 'Kouvola'
      },
      {
        name: 'Koivusaari',
        location: 'Myllykoski, Kouvola'
      }
    ];

    $scope.add = function(){
    };

  }]);
