var app = angular.module('demo', []);

app.controller('AppCtrl', function($scope) {
    $scope.name = "Hoa Do";
    $scope.money = "120";
    $scope.my_date = new Date();
    $scope.items = [
        {
            name: "Long Vu",
            email:"longvu2000@gmail.com"
        },

        {
            name: "Hoa Do",
            email:"hoa2000kxpt@gmail.com"
        }

    ];
    $scope.demo_click = function() {
        alert("Hello World!");
    }

});