
myWebApp.controller('carouselController', ['$scope', '$timeout', 'productService', '$q', function ($scope, $timeout, productService, $q) {
    $scope.items = [];
    
    productService.getAllProducts().then(
        function (data) {
            // console.log(data);
            $scope.items = data;
            $timeout(function () {
                $scope.dataLoaded = true;
            }, 2000);
        }
    )


}]);

myWebApp.controller("signInSignUpController", function ($scope) {
    $scope.isLogin = false;
    $scope.accounts = [];
    $scope.userSignup = {
        fullname: "",
        email: "",
        password: "",
        genders: ""

    };

    // $scope.user.password = "";
    if (localStorage.getItem('user-list')) {
        $scope.accounts = angular.fromJson(localStorage.getItem('user-list'));
    }

    if (sessionStorage.getItem('login')) {
        $scope.isLogin = true;
        $scope.info = angular.fromJson(sessionStorage.getItem('login'));
    }
    $scope.signUp = function () {
        let fullname = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        // let isValid = true;
        console.log(fullname);
        if (fullname == "" || email == "" || password == "") {
            alert("Các trường bắt buộc không được để trống!");
            return false; 
        }
        $scope.accounts.push($scope.userSignup);
        // $scope.user = null;
        localStorage.setItem('user-list', angular.toJson($scope.accounts));
        // console.log($scope.accounts);




        Swal.fire({
            icon: 'success',
            title: 'Đăng ký thành công!',
            showConfirmButton: false,
            timer: 2000
        })
            .then(function (result) {
                if (true) {
                    window.location.href = "/index.html";
                }
            })
    }

    // console.log($scope.accounts);
    $scope.login = function () {
        // console.log($scope.email_signin);
        // console.log($scope.password_signin);
        // $scope.email_signin = "";
        // $scope.password_signin = "";

        $scope.user = check_login($scope.email_signin, $scope.password_signin);
        if ($scope.user) {
            // save the valid account into the sessionDB
            sessionStorage.setItem('login', angular.toJson($scope.user));

            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công!',
                showConfirmButton: false,
                timer: 2000
            })
                .then(function (result) {
                    if (true) {
                        // window.location.href = "https://www.google.com/";
                        $scope.isLogin = true;
                        $scope.info = $scope.user;
                        $('#myModal').hide();
                    }
                })
            $(".header-top-menu-instruction").hide();
            $(".header-top-menu-login").hide();
            $(".header-top-menu-register").hide();
            $(".header-top-menu-user").show();
            $(".header-top-menu-logout").show();

        } else {
            // Inform error!
            Swal.fire({
                icon: 'error',
                title: 'Vui lòng đăng nhập lại',
                text: 'Email hoặc mật khẩu không đúng!',
            })
        }
    }

    function check_login(email, pass) {
        for (var i = 0; i < $scope.accounts.length; i++) {
            if ($scope.accounts[i].email == email && $scope.accounts[i].password == pass) {
                return $scope.accounts[i];
            }
        }
        return false;
    }

    $scope.logout = function () {
        sessionStorage.removeItem('login');
        $scope.isLogin = false;
        window.location.reload();

    }
});

myWebApp.controller("cartHeaderController", ['$scope', function ($scope) {
    $scope.cart_nums = 0;
    $scope.$watch(function () {
        return localStorage.getItem('buy-cart');
    }, function (newCodes, oldCodes) {
        $scope.cart_nums = JSON.parse(newCodes || '[]').length;
        console.log(newCodes);
    });

    // console.log($scope.cart_nums);
    // $scope.cartRedirectPage = function() {
    //     if ($scope.cart_nums == 0) {
    //         $location.path = '#/emptycart';
    //         // localStorage.setItem('buy-cart');
    //     } else {
    //         console.log("Heloo")
    //     }
    // }
}])




