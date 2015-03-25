'use strict';

angular.module('folf')
  .controller('FolfCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

    $rootScope.toolbar = {
      home: true,
      title: ''
    };

    $scope.goBack = function(){
      $state.go('^');
    }

  }]);
