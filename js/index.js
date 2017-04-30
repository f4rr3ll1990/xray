
var app = angular.module("app", ["firebase", "ngMaterial"]);

app.controller("XrayCtrl",["$scope", "$firebase", "$firebaseAuth", function($scope, $firebase, $firebaseAuth) {
  var ref = new Firebase("https://angulardemo-2b7d0.firebaseio.com/");
  var sync = $firebase(ref);  
  $scope.messages = sync.$asArray();
  $scope.addMessage = function(Sity, Clinic) {
    $scope.messages.$add({
        Sity: Sity,
        Clinic: Clinic
    });
  }
}]);