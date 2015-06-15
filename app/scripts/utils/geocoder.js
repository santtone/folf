angular.module('folf')
  .factory('geocoder', ['$http', function ($http) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

    return{
      geocode: function (address) {
        var query = address.city + '+' + address.streetAddress;
        var query = query.replace(' ', '+');
        var promise = $http.get(url + query);
        return promise.then(function (response) {
          return response;
        });
      }
    }

  }]);
