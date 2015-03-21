'use strict';

/**
 * @ngdoc function
 * @name folfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the folfApp
 */
angular.module('folfApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
