var app = angular.module("app", []);

app.controller("MyCtrl", function($scope, $http) {

    $scope.fetchUser = function() {


        var url = "https://api.github.com";
        let user_url = url + "/users/" + $scope.user;
        let repositories_url = url + "/users/" + $scope.user + "/repos";


        $http({
            method: 'GET',
            url: user_url
        }).then(function successCallback(response) {
            $scope.result = response.data;
            $scope.keys = Object.keys($scope.result);
     
        }, function errorCallback(response) {
            console.log("Error...",response.statusText);
        });



        $http({
            method: 'GET',
            url: repositories_url
        }).then(function successCallback(response) {
            $scope.repositories = response.data;

        }, function errorCallback(response) {
            console.log("Error...");
        });
    };




});