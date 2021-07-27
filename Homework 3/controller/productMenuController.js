// CONTROLLERS
myWebApp.controller('productMenuController', ['$scope', 'productService', function ($scope, productService) {
    
    $scope.items = [];
    productService.getAllProducts().then(
        function(data) {
            // console.log(data);
            $scope.items = data;
            
        }
    )
    

    

}]);

