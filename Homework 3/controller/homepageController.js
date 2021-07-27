// CONTROLLERS


myWebApp.controller('carouselController', ['$scope', '$timeout', 'productService', '$q', function ($scope, $timeout, productService, $q) {
    $scope.items = [];
    productService.getAllProducts().then(
        function(data) {
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
    if (localStorage.getItem('user-list')) {
        $scope.accounts = angular.fromJson(localStorage.getItem('user-list'));
    }

    if (sessionStorage.getItem('login')) {
        $scope.isLogin = true;
        $scope.info = angular.fromJson(sessionStorage.getItem('login'));
    }
    $scope.signUp = function () {
        $scope.accounts.push($scope.user);
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

    console.log($scope.accounts);
    $scope.login = function () {
        // console.log($scope.email_signin);
        // console.log($scope.password_signin);
        // $scope.email_signin = "";
        // $scope.password_signin = "";
        
        $scope.user = check_login($scope.email_signin, $scope.password_signin);
        if ($scope.user) {
            // save the valid account into the sessionDB
            sessionStorage.setItem('login', angular.toJson($scope.user));
            $scope.isLogin = true;
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Đăng ký thành công!',
            //     showConfirmButton: false,
            //     timer: 2000
            // })
            // .then(function (result) {
            //     if (true) {
            //         window.location.href = "/index.html";
            //     }
            // })
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
});

// weatherApp.config(function ($routeProvider) {
   
//     $routeProvider
    
//     .when('/', {
//         templateUrl: 'pages/home.htm',
//         controller: 'homeController'
//     })

// })





