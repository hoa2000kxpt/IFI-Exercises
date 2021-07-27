myWebApp.controller('productPaymentController', ['$scope', function ($scope, $localStorage) {
    $scope.totalCart = 0;
    $scope.carts = JSON.parse(localStorage.getItem("buy-cart"));
    $scope.removeItem = function (id) {
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa sản phẩm này chứ?',
            text: "Sản phẩm của bạn sẽ không thể khôi phục sau khi xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa sản phẩm',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Đã xóa!',
                    'Sản phẩm của bạn đã được xóa',
                    'success'
                )
                $scope.carts.splice(id, 1);
                // alert("Your cart is empty!");

                localStorage.setItem("buy-cart", JSON.stringify($scope.carts));
                location.reload();
                // if ($scope.carts.length === 0) {
                //     window.location.href = "#/productPayment";
                // }
            }
        })


    }
    $scope.removeAll = function () {
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa sản phẩm này chứ?',
            text: "Sản phẩm của bạn sẽ không thể khôi phục sau khi xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa tất cả',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Đã xóa!',
                    'Sản phẩm của bạn đã được xóa',
                    'success'
                )
                localStorage.removeItem("buy-cart");

                window.location.href = "#/emptycart";

            }
        })


    }
    console.log($scope.carts);

    for (var i = 0; i < $scope.carts.length; i++) {
        $scope.totalCart = $scope.totalCart + ($scope.carts[i].price * $scope.carts[i].quantity);
        // console.log($scope.totalCart);
    }

}])