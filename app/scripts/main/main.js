'use strict';

angular.module('folf')
  .controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.mapSelected = function(){
      $state.go('folf.map');
    }

  }]);
