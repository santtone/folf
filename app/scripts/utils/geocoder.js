angular.module('folf')
  .factory('geocoder', ['$http', function ($http) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

    return{
      geocode: function (address) {
        var address = address.replace(' ', '+');
        var promise = $http.get(url + address);
        return promise.then(function (response) {
          return response;
        });
      }
    }

  }]);
