app.controller("ItemListCtrl", function ($scope, $http) {
  $scope.items = [];

  $http.get("https://todo-ang-app.firebaseio.com/items.json")
    .success(function(itemObject) {
      var itemCollection = itemObject;
      console.log("itemObject",itemCollection);
      //returns an array with all keys in that object, loops through every key and stores that value
      Object.keys(itemCollection).forEach(function(key) {
          itemCollection[key].id=key;
          //pushing the object into the items array
          $scope.items.push(itemCollection[key]);
        });
      });
  });
