angular.module('folf')
  .factory('geocoder', ['$http', function ($http) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json?';

    return{
      geocode: function (address) {
        var address = address.replace(' ', '+');
        var promise = $http.get(url + address);
        return promise.then(function(response){
          console.log(response);
        });
      }
    }

  }]);
