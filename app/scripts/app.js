'use strict';

angular.module('folf', [
  'ui.router',
  'ui.router.stateHelper',
  'ng-polymer-elements'
]);

angular.module('ng-polymer-elements').constant('$ngPolymerMappings', {
/*TODO
newElement: {
    anAttribute: {
      primitive: 'an-attribute'
    },
    anEvent: {
      event: 'an-event'
    }
  }*/
});