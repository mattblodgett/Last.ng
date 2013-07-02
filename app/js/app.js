'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/user/:username/artists', {templateUrl: 'partials/user-artists.html', controller: 'UserCtrl'});
    $routeProvider.when('/artist/:artist/albums', {templateUrl: 'partials/artist-albums.html', controller: 'ArtistCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
