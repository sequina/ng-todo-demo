var app = angular.module("AwesomeApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider.
  when('/items/list',{
    templateUrl:'partials/item-list.html',
    controller:"TodoCtrl"
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller:"TodoCtrl"
  }).
  when('/items/details', {
    templateUrl: 'partials/item-details.html',
    controller:"TodoCtrl"
  }).
  otherwise('/items/list');
});
