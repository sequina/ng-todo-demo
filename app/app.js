var app = angular.module("AwesomeApp", ["ngRoute"])
  .constant("firbaseURL", "https://todo-ang-app.firebaseio.com/");

app.config(function ($routeProvider) {
  $routeProvider.
  when('/items/list',{
    templateUrl:'partials/item-list.html',
    controller:"ItemListCtrl"
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller:"ItemNewCtrl"
  }).
  //dynamically puts firebase id in url to display on this page anything that has a : in front you can pull that info out
  when('/items/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller:"ItemViewCtrl"
  }).
  otherwise('/items/list');
});
