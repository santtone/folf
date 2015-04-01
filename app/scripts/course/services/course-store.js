'use strict';

angular.module('folf')
  .factory('courseStore', ['$rootScope', function ($rootScope) {

    var saved = {};

    function arr(a) {
      return _.isArray(a) ? a : [a];
    }

    function broadcastCourseReset(courses) {
      $rootScope.$broadcast('course:reset', courses);
    }

    var store = function () {
      var api = {
        save: function (id, content) {
          saved[id] = content;
          return api.load(id);
        },
        load: function (id) {
          return saved[id];
        },
        loadAll: function () {
          return saved;
        }
      };
      return api;
    };

    return {
      findCourses: function (ids) {
        var ii = arr(ids);
        return _.compact(
          _.map(ii, function (id) {
            return store().load(id);
          }));
      },
      findAllCourses: function () {
        return store().loadAll();
      },
      saveCourse: function (id, content) {
        return store().save(id, content);
      },
      resetCourses: function(courses){
        var saved = _.map(courses, function (c) {
          return store().save(c.id, c);
        });
        broadcastCourseReset(saved);
        return saved;
      }
    };
  }]);
