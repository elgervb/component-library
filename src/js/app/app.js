/* global angular */
(() => {
  
  angular.module('patternlib', ['ui.router', 'templates'])

  .config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'modules/main.html'
    })
    .state('main.section', {
      url: '/:id',
      templateUrl: (args) => {
        return `modules/sections/${args.id}.html`;
      }
    });

    $locationProvider.html5Mode('true');
    
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });
})();
