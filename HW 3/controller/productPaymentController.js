myWebApp.controller('productPaymentController', ['$scope', function ($scope, $localStorage) {
    $scope.transportFee = 15000;
    $scope.carts = JSON.parse(localStorage.getItem("buy-cart"));
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $('body').css('overflow-x', 'scroll');

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

    $scope.exportData = function () {
        var blob = new Blob([document.getElementsByClassName('payment-table')[0].innerHTML,
        document.getElementsByClassName('cart-total')[0].innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });

        Swal.fire({
            icon: 'success',
            title: 'Thanh toán thành công!',
            showConfirmButton: false,
            timer: 2000
        })
            .then(function (result) {
                if (true) {
                    saveAs(blob, "Hóa đơn mua hàng.xls");
                    // $scope.carts.splice(id,1);
                    // localStorage.setItem('buy-cart', JSON.stringify($scope.carts));
                    // window.location.href = "#";

                }
            })


    };

    $scope.minusItem = function (id) {
        // alert("Hello!");
        ($scope.carts[id].quantity >= 2) ? $scope.carts[id].quantity-- : $scope.carts[id].quantity;
        localStorage.setItem('buy-cart', JSON.stringify($scope.carts));
    }

    $scope.plusItem = function (id) {
        $scope.carts[id].quantity++;
        localStorage.setItem('buy-cart', JSON.stringify($scope.carts));
    }

    $scope.getTotalPrice = function () {
        let total = 0;
        for (var i = 0; i < $scope.carts.length; i++) {
            total += ($scope.carts[i].price * $scope.carts[i].quantity);
            // console.log($scope.totalCart);
        }
        return total + $scope.transportFee * $scope.carts.length;
    }
    



}])