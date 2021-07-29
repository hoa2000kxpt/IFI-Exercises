myWebApp.controller("productController", ['$scope', '$routeParams', 'productService', function ($scope, $routeParams, productService) {
    $scope.id = $routeParams.id;
    $scope.quantity = 1;
    $scope.transportFee = 15000;
    $scope.totalPrice = 0;
    $scope.carts = [];
    $scope.item = [];
    // console.log($scope.id);
    $("#pop-up").remove()

    $scope.$watch("quantity", function () {
        console.log($scope.quantity);
    })


    productService.getSingleProduct($scope.id).then(
        function (data) {

            $scope.item = data;
            console.log($scope.item);
        })


    $scope.selectMe = function (item) {
        // console.log(item);
        $("#Product-modal").modal("show");
        if (item) {

            if (localStorage.getItem('buy-cart')) {
                $scope.carts = angular.fromJson(localStorage.getItem('buy-cart'));
            }
            let isDuplicated = false;
            for (var i = 0; i < $scope.carts.length; i++) {
                if ($scope.carts[i].id == item.id) {
                    $scope.carts[i].quantity += $scope.quantity;
                    // console.log($scope.carts[i].quantity);
                    isDuplicated = true;
                }
            }
            if (!isDuplicated) {

                $scope.carts.push({
                    id: item.id, image: item.image, title: item.title, code: item.code,
                    link: item.link, price: item.price, quantity: $scope.quantity
                });
                // console.log($scope.carts);

            }
            // console.log($scope.carts);
            localStorage.setItem('buy-cart', JSON.stringify($scope.carts));
            $scope.totalPrice = $scope.transportFee + (item.price * $scope.quantity);

            // Problems: Save the data in the localStorage, Duplicated problems
        }
        $scope.cartNums = $scope.carts.length;
        // console.log($scope.cartNums);

        $scope.getTotalCartWithoutTransportFee = function () {
            let total = 0;
            for (var i = 0; i < $scope.carts.length; i++) {
                total += ($scope.carts[i].price * $scope.carts[i].quantity);
                // console.log($scope.totalCart);
            }
            return total;
        }

        $scope.getTransportFee = function() {
            let transportFee = 0;
            transportFee = $scope.transportFee * $scope.carts.length;
            return transportFee;
        }

        $scope.getTotalCart = function () {
            let total = 0;
            for (var i = 0; i < $scope.carts.length; i++) {
                total += ($scope.carts[i].price * $scope.carts[i].quantity);
                // console.log($scope.totalCart);
            }
            return total + $scope.transportFee * $scope.carts.length;
        }

    };

    $scope.removeSingleItem = function (id) {
        // console.log(id);
        $scope.carts.splice(id, 1);
        localStorage.setItem('buy-cart', JSON.stringify($scope.carts));
    }


}])