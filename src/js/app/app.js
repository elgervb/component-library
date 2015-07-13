
var app = angular.module('default', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/buttons', {
      templateUrl: '/js/app/modules/sections/buttons.html'
    })
    .when('/colors', {
      controller: 'ColorController',
      templateUrl: '/js/app/modules/sections/colors.html'
    })
    .when('/forms', {
      templateUrl: '/js/app/modules/sections/forms.html'
    })
    .when('/lists', {
      templateUrl: '/js/app/modules/sections/lists.html'
    })
    .when('/tables', {
      templateUrl: '/js/app/modules/sections/tables.html'
    })
    .when('/typography', {
      templateUrl: '/js/app/modules/sections/typography.html'
    })
    .when('/columns', {
      templateUrl: '/js/app/modules/sections/columns.html'
    })
    .when('/popover', {
      templateUrl: '/js/app/modules/sections/popover.html'
    })
    .when('/overlay', {
      templateUrl: '/js/app/modules/sections/overlay.html'
    })
    .otherwise({
      templateUrl: '/js/app/modules/main.html'
    });

  $locationProvider.html5Mode('true');

}); // end config
