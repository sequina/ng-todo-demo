var app = angular.module("AwesomeApp", []);

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [{name: "Logout"},{name: "All Items"}, {name: "New Item"} ];
});


app.controller("TodoCtrl", function ($scope) {
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "greg",
      location: "Zoe's house",
      urgency: "low",
      dependencies: "sunshine,clippers, hat,water, headphones"
    },
    {
       id: 1,
      task: "grade quizzes",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "joe",
      location: "NSS",
      urgency: "high",
      dependencies: "WIFI, Tissues, Vodka"
    },
    {
       id: 2,
      task: "take a nap",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "zoe",
      location: "Zoe's house",
      urgency: "medium",
      dependencies: "hammock, pillow, blanket,cat"
    }
  ];
  $scope.addNewItem = function() {
    console.log("hello");
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    console.log("added new item", $scope.newTask);
    $scope.items.push($scope.newTask);
    $scope.newTask="";
  };


  $scope.newItem = function() {
    $scope.showListView= false;
    console.log("clicked new",$scope.showListView);
  };
  $scope.allItem = function() {
    $scope.showListView= true;
    console.log("clicked all", $scope.showListView);
  };


});
