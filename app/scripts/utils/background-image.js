angular.module('folf').directive('folfBackgroundImage', function(){
  return function(scope, element, attrs){
    var url = attrs.folfBackgroundImage;
    element.css({
      'background-image': 'url(' + url +')',
      'background-size' : 'cover'
    });
  };
});