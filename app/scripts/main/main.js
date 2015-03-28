'use strict';

angular.module('folf')
  .controller('MainCtrl', ['$scope', '$state','geocoder', function ($scope, $state, geocoder) {

    $scope.mapSelected = function(){
      //$state.go('folf.map');
      geocoder.geocode('');
    };

    $scope.courseSelected = function(){
      $state.go('folf.courseList');
    }

  }]);
