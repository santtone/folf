angular.module('folf')
  .factory('courseStore', [function () {

    var saved = {};

    function arr(a) {
      return _.isArray(a) ? a : [a];
    }

    var store = function () {
      var api = {
        save: function (id, content) {
          saved[id] = content;
          return api.load(id); // verify what has been saved
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
      }
    };
  }]);
