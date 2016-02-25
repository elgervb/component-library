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
  })
  
  .directive('script', ($parse, $rootScope) => {
    return {
      restrict: 'E',
      terminal: true,
      link: (scope, element, attr) => {
        if (attr.ngSrc) {
          let script = document.createElement('script');
          script.setAttribute('src', attr.ngSrc);
          script.setAttribute('defer', 'defere');
          script.setAttribute('async', 'asunc');
          
          document.head.appendChild(script);
        }
      }
    };
  });
})();
