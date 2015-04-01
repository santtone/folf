'use strict';

angular.module('folf')
  .factory('courseLocalStorageApi', ['$q', 'localStorageService', function ($q, localStorage) {

    var key = 'courses';

    function readCourses(){
      return $q.when(localStorage.get(key) || {});
    }

    function writeCourses(cc){
      return $q.when(localStorage.set(key, cc)).then(readCourses());
    }

    return{
      read: function(ids){
        return readCourses().then(function(cc){
          if(!ids){
            return cc;
          }else{
            return _.find(ids, function(id){
              return _.findWhere(cc, {id: id});
            })
          }
        });
      },
      write: function(c){
        return readCourses().then(function(cc){
          cc[c.id] = c;
          return writeCourses(cc);
        });
      }
    }

  }]);
