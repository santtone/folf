'use strict';

angular.module('folf')
  .factory('courseUtils', ['$q', 'geocoder', function ($q, geocoder) {

    function parseGeocodeResponse(data) {
      var result = _.find(data.data.results);
      return (result && result.geometry) ? result.geometry.location : null;
    }

    return{
      findLocation: function (c) {
        if (c.location) {
          return $q.when(c);
        } else {
          return geocoder.geocode(c.address).then(function (data) {
            c.location = parseGeocodeResponse(data);
            return c;
          });
        }
      }
    }

  }]);
