'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.greeting = "Hello, world";
  }])
  .controller('MyCtrl2', [function() {

  }]);