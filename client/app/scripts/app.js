'use strict';

/**
 * @ngdoc overview
 * @name geneticsApp
 * @description
 * # geneticsApp
 *
 * Main module of the application.
 */
angular
  .module('geneticsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/talen', {
        templateUrl: 'views/talens.html',
        controller: 'TalensCtrl'
      })
      .when('/sequences', {
        templateUrl: 'views/sequences.html',
        controller: 'SequencesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('Sequence', ['$resource', function($resource) {
    return $resource('/api/seq/', null, {
      'index': { method:'GET' }
    });
  }]);
