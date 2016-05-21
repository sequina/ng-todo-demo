var app = angular.module("AwesomeApp", []);

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [{name: "Logout"},{name: "All Items"}, {name: "New Item"} ];
});


app.controller("TodoCtrl", function ($scope) {
  $scope.welcome = "hello";
  $scope.showListView = false;
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



  $scope.newItem = function() {
    console.log("clicked new" );
    $scope.showListView= false;
  };
  $scope.allItem = function() {
    console.log("clicked all" );
    $scope.showListView= true;
  };
  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    console.log("added new item", $scope.newTask);
    $scope.items.push($scope.newTask);
    $scope.newTask="";
  }

});
