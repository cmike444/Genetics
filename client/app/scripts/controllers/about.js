'use strict';

/**
 * @ngdoc function
 * @name geneticsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geneticsApp
 */
angular.module('geneticsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
