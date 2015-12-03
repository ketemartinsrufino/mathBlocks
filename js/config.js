app.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('stage_one', {
      url: '/stage_one',
      templateUrl: 'stage_one.html'
    });
});
