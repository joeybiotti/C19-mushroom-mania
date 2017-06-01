"use strict";

console.log("app.js loaded");

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/mushrooms.html',
    controller: 'MushroomCtrl'
  }).
  otherwise('/');
});
