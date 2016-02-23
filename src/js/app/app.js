/* global angular */
(() => {
  
  angular.module('patternlib', ['ui.router', 'templates'])

  .config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {

    $urlRouterProvider.otherwise('/buttons');
    $urlRouterProvider.when('/', '/buttons'); // defaults to buttons
    
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'modules/main.html'
    })
    .state('main.section', {
      url: ':id',
      templateUrl: (args) => {
        return `modules/sections/${args.id}.html`;
      }
    })
    .state('examples', {
      url: '/examples/:id',
      templateUrl: (args) => {
        return `modules/examples/${args.id}.html`;
      }
    });

    $locationProvider.html5Mode('true');
    
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });
})();
