/**
 * this is controller for form
*/
angular.module('myApp').controller('formController',['$scope',function($scope){
    $scope.title="This is form";
    var data={
        username: $scope.username
    }
}]);
