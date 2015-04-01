'use strict';

angular.module('folf')
  .factory('courseService', ['$q', 'courseStore', 'courseUtils', 'courseLocalStorageApi',
    function ($q, courseStore, courseUtils, courseLocalStorage) {

      function arr(a) {
        return _.isArray(a) ? a : [a];
      }

      function searchLocalStorageCourses(id) {
        return courseLocalStorage.read(id).then(function (cc) {
          return courseStore.resetCourses(cc);
        });
      }

      return {
        get: function (ids) {
          var ii = arr(ids);
          return $q.all(
            _.map(ii, function (id) {
              var cached = courseStore.findCourses(id);
              return (cached && $q.when(cached)) || searchLocalStorageCourses(id);
            }))
            .then(_.flatten);
        },
        getAll: function () {
          return $q.when(
            function () {
              var cached = courseStore.findAllCourses();
              return (!_.isEmpty(cached) && $q.when(cached)) || searchLocalStorageCourses();
            }()
          ).then(_.toArray);
        },
        add: function (course) {
          //TODO: generate real id or get it from database
          if (course && !course.id) {
            course.id = new Date().getTime();
          }
          return $q.all(courseUtils.findLocation(course).then(function (c) {
            return courseLocalStorage.write(c).then(function (cc) {
              return courseStore.resetCourses(cc);
            });
          }));
        }
      };
    }
  ]);
