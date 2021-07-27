var app = angular.module('demo', []);

app.controller('AppCtrl', function($scope) {
    // sessionStorage.setItem('name', 'demo storage name');
    var name = sessionStorage.getItem('name');
    console.log(name);

})