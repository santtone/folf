'use strict';

angular.module('folf')
  .factory('courseService', ['$q', 'courseStore', function ($q, courseStore) {

    function arr(a) {
      return _.isArray(a) ? a : [a];
    }

    return {
      get: function (ids) {
        var ii = arr(ids);
        return $q.all(
          _.map(ii, function (id) {
            var cached = courseStore.findCourses(id);
            return (cached && $q.when(cached)) || [];
          }))
          .then(_.flatten);
      },
      getAll: function(){
        return $q.when(courseStore.findAllCourses());
      },
      add: function (c) {
        //TODO: generate real id or get it from database
        if (c && !c.id) {
          c.id = new Date().getTime();
        }
        return $q.when(courseStore.saveCourse(c.id, c));
      }
    };

  }
  ]);
