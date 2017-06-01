"use strict";

console.log("MushroomCtrl.js loaded");

app.controller("MushroomCtrl", function($scope, MushroomFactory) {
  console.log("shroom controller");
  MushroomFactory.getShrooms()
    .then(function(itemCollection) {
      $scope.mushrooms = itemCollection;
      console.log("shrooms", $scope.mushrooms);
    });
});
