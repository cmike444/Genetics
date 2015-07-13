'use strict';

/**
 * @ngdoc function
 * @name geneticsApp.controller:SeqsCtrl
 * @description
 * # SeqsCtrl
 * Controller of the geneticsApp
 */
angular.module('geneticsApp')
  .controller('SequencesCtrl', ['$scope', 'Sequence', function ($scope, Sequence) {
    $scope.sequences = Sequence.query();
  }]);