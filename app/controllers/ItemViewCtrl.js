app.controller("ItemViewCtrl", function ($scope, $http, $routeParams) {
    $scope.items = [];
    $scope.selectItem = {};
    console.log($routeParams.itemId);

    itemStorage.getItemlist().then(function(itemCollection){

              $scope.items=itemCollection;

              $scope.selectedItem = $scope.items.filter(function(item) {
                return item.id === $routeParams.itemId;
              }) [0];
            });
        });
