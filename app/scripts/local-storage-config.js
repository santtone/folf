'use strict';

angular.module('folf').config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('folf')
    .setStorageType('localStorage');
});