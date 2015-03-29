'use strict';

angular.module('folf')
  .controller('MapCtrl', ['$scope', 'courseService', function ($scope, courseService) {

    $scope.courses = [];

    courseService.getAll().then(function (courses) {
      $scope.courses = courses;
/*      $scope.courses.push({
        address: "Penttilänkatu 16K Kouvola",
        id: 1427654679425,
        info: "asdasd",
        location: {
          lat: 60.85495919999999,
          lng: 26.7191595}, name: "Testi"
      });*/
    });

  }]);
