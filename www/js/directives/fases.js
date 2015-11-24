app.directive('configureFases', function() {
  return {
    restrict: 'E',
    scope: {
      info:'='
    },
    templateUrl: (function() {
      return 'js/directives/'+ info.fase + '.html '
    }()) ,
    link: function(scope, element, attrs) {
        scope.buttonText = "Install",
        scope.installed = false,

        scope.download = function() {
          element.toggleClass('btn-active');
          if(scope.installed) {
            scope.buttonText = "Install";
            scope.installed = false;
          } else {
            scope.buttonText = "Uninstall";
            scope.installed = true;
          }
        }
    }
  };

});
