'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeCtrl', ['$scope', function($scope) {
  	$scope.greeting = "Hello, world";
  }])

  .controller('UserCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  	$scope.username = $routeParams.username;

  	var recentTracksUrl = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + $routeParams.username + "&api_key=ee3dc61e84dfd72067a520d0cb55300b&format=json&callback=JSON_CALLBACK";
  	$http.jsonp(recentTracksUrl).
  	  success(function (data) {
        $scope.recentTracks = data.recenttracks.track.map(function (track) {
          return {
            artist: track.artist["#text"],
            song: track.name
          };
        });
  	  });

    var topArtistsUrl = "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit=15&user=" + $routeParams.username + "&api_key=ee3dc61e84dfd72067a520d0cb55300b&format=json&callback=JSON_CALLBACK";
    $http.jsonp(topArtistsUrl).
      success(function (data) {
        $scope.artists = data.topartists.artist.map(function (artist) {
          return {
            name: artist.name,
            plays: artist.playcount
          };
        });
      });

    var topTracksUrl = "http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit=15&user=" + $routeParams.username + "&api_key=ee3dc61e84dfd72067a520d0cb55300b&format=json&callback=JSON_CALLBACK";
    $http.jsonp(topTracksUrl).
      success(function (data) {
        $scope.topTracks = data.toptracks.track.map(function (track) {
          return {
            artist: track.artist.name,
            song: track.name,
            plays: track.playcount
          };
        });
      });
  }])

  .controller('ArtistCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  	$scope.artist = $routeParams.artist;
  	var lastFMUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + $routeParams.artist + "&api_key=ee3dc61e84dfd72067a520d0cb55300b&format=json&callback=JSON_CALLBACK";
  	$http.jsonp(lastFMUrl).
  	  success(function (data) {
        $scope.data = data.topalbums.album;
  	  });
  }]);