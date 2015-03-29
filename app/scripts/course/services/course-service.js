'use strict';

angular.module('folf')
  .factory('courseService', ['$q', 'courseStore', 'courseUtils', function ($q, courseStore, courseUtils) {

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
      getAll: function () {
        return $q.when(courseStore.findAllCourses()).then(_.toArray);
      },
      add: function (c) {
        //TODO: generate real id or get it from database
        if (c && !c.id) {
          c.id = new Date().getTime();
        }
        function save(c) {
          return courseStore.saveCourse(c.id, c);
        }

        return $q.all(courseUtils.findLocation(c).then(save));
      }
    };
  }
  ]);
