'use strict';

angular.module('folf', [
  'ui.router',
  'ui.router.stateHelper',
  'ng-polymer-elements'
]);

angular.module('ng-polymer-elements').constant('$ngPolymerMappings', {
  folfMainItem: {
    folfSelected: {
      event: 'selected'
    }
  },
  folfScaffold: {
    folfHome: {
      primitive: 'menu'
    },
    folfGoBack: {
      event: 'go-back'
    }
  }
});