"use strict";

console.log("MushroomFactory.js loaded");

app.factory("MushroomFactory", function($q, $http){
  let getShrooms = () =>{
    let items = [];
    return $q((resolve, reject) => {
      $http.get('./data/mushrooms.json')
      .then((itemObject) =>{
        let itemCollection = itemObject.data;
        console.log("itemCollection", itemCollection);
        resolve(itemCollection.mushrooms);
      })
        .catch((error) => {
            reject(error);
        });
        return {getShrooms};
    });
  };
});
