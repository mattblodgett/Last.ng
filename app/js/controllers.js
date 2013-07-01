'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.greeting = "Hello, world";
  }])
  .controller('MyCtrl2', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  	$scope.username = $routeParams.username;
  	var lastFMUrl = "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=" + $routeParams.username + "&api_key=ee3dc61e84dfd72067a520d0cb55300b&format=json&callback=JSON_CALLBACK";
  	$http.jsonp(lastFMUrl).
  	  success(function (data) {
        console.log(data);
        $scope.data = data;
  	  });
  }]);