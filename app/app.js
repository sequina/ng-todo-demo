var app = angular.module("AwesomeApp", ["ngRoute"])
  .constant("firebaseURL", "https://todo-ang-app.firebaseio.com/");

let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if(authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})



app.config(function ($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl:'partials/item-list.html',
    controller:"ItemListCtrl",
    resolve: {isAuth}
  }).
  when('/items/list',{
    templateUrl:'partials/item-list.html',
    controller:"ItemListCtrl",
    resolve: {isAuth}
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller:"ItemNewCtrl",
    resolve: {isAuth}
  }).
  // dynamically puts firebase id in url to display on this page anything that has a : in front you can pull that info out

  when('/items/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller:"ItemViewCtrl",
    resolve: {isAuth}
  }).
  when('/items/:itemId/edit', {
    templateUrl: 'partials/item-new.html',
    controller:"ItemEditCtrl",
    resolve: {isAuth}
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: "LoginCtrl"
  }).
  when('/logout', {
    templateUrl: 'partials/login.html',
    controller: "LoginCtrl"
  }).
  otherwise('/');
});


app.run(($location) => {
  let todoRef = new Firebase("https://todo-ang-app.firebaseio.com/");
  todoRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  })
})











