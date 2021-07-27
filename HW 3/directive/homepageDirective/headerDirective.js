myWebApp.directive("headerTopDown", function (cssInjector) {
    return {
        // restrict: 'AECM',
        replace: true,
        templateUrl: "/view/Homepage/header.html",
        link: function ($scope, element, attrs) {
            cssInjector.add("/view/Homepage/header.css");
            var navbar = document.getElementsByClassName("myTopnav")[0];
            var topNavBtn = document.getElementsByClassName("icon")[0];
            var sticky = navbar.offsetTop;

            // function myFunction() {
            //   if (window.pageYOffset >= sticky) {

            //     navbar.classList.add("sticky")
            //   } else {
            //     navbar.classList.remove("sticky");
            //   }
            // }

            topNavBtn.addEventListener("click", function responsiveTopNav() {
                var x = document.getElementById("myTopnav");
                if (x.className === "header-below-menu") {
                    x.className += " responsive";
                } else {
                    x.className = "header-below-menu";
                }
            }) 



            // Call Sign In, Sign Up modal
            var modal_1 = document.getElementById("myModal");
            var modal_2 = document.getElementById("myModal-2");
            var body = document.querySelector("body");
            // console.log(modal_1);
            // console.log(modal_2);

            // Call Sign In, Sign Up button
            var btn_1 = document.getElementById("login");
            var btn_2 = document.getElementById("sign-up");
            // console.log(btn_2);

            // Call "x" symbol of both pages
            var span_1 = document.getElementsByClassName("close")[0];
            var span_2 = document.getElementsByClassName("close-2")[0];
            // console.log(span_2);
            // console.log(span_2);

            // When the user clicks the button, open the modal of these pages
            btn_1.addEventListener("click", function () {
                modal_1.style.display = "block";
            });

            btn_2.addEventListener("click", function () {
                // console.log("aaaaaaa");
                modal_2.style.display = "block";
            });

            // When the user clicks on (x), close the modal
            span_1.addEventListener("click", function () {
                modal_1.style.display = "none";
            });

            span_2.addEventListener("click", function () {
                modal_2.style.display = "none";
            });

            // When the user clicks anywhere outside of the modal, close it
            window.addEventListener("click", function (event) {
                if (event.target == modal_1) {
                    modal_1.style.display = "none";
                    body.style.overflow = "scroll";
                }
            })

            window.addEventListener("click", function (event) {
                if (event.target == modal_2) {
                    modal_2.style.display = "none";
                    body.style.overflow = "scroll";
                }
            });

            btn_1.addEventListener("click", function () {
                modal_1.style.display = "block";
                body.style.overflow = "hidden";
            })

            // span_1.addEventListener('click', () => {
            //  modal_1.style.display = "none";
            //  body.style.overflow = "scroll";
            // })

            btn_2.addEventListener("click", function () {
                modal_2.style.display = "block";
                body.style.overflow = "hidden";
            })

            // span_2.addEventListener('click', () => {
            //  modal_2.style.display = "none";
            //  body.style.overflow = "scroll";
            // })


            // $(function () {
            //     var users = [
            //         {
            //             "email": "hoa2000kxpt@gmail.com",
            //             "pass": "123456"
            //         },
            //         {
            //             "email": "longvu2000@gmail.com",
            //             "pass": "longvudeptrai"
            //         }
            //     ];
            //     $(".form-signin").submit(function (e) {
            //         e.preventDefault();
            //         let email_signIn = $("[name='email_signin']").val();
            //         let pass_signIn = $("[name='password_signin']").val();
            //         let hasError = false;
            //         // console.log(users);

            //         if (!$(".hide-email-signin").hasClass('hide')) {
            //             $(".hide-email-signin").addClass('hide');
            //         }

            //         if (!$(".hide-password-signin").hasClass('hide')) {
            //             $(".hide-password-signin").addClass('hide');
            //         }

            //         if (email_signIn === "") {
            //             e.preventDefault();
            //             $(".hide-email-signin").text('Email không được để trống!');
            //             $(".hide-email-signin").css(
            //                 {
            //                     "color": "red",
            //                     "font-weight": "bold",
            //                     "font-size": 12
            //                 });
            //             $(".hide-email-signin").removeClass('hide');
            //             $("[name='email_signin']").focus();
            //             hasError = true;
            //         }

            //         if (pass_signIn === "") {
            //             e.preventDefault();
            //             $(".hide-password-signin").text('Mật khẩu không được để trống!');
            //             $(".hide-password-signin").css(
            //                 {
            //                     "color": "red",
            //                     "font-weight": "bold",
            //                     "font-size": 12
            //                 });
            //             $(".hide-password-signin").removeClass('hide');
            //             $("[name='password_signin']").focus();
            //             hasError = true;
            //         }

            //         for (let i = 0; i < users.length; i++) {
            //             if (!hasError && email_signIn == users[i].email && pass_signIn == users[i].pass) {
            //                 alert("Đăng nhập thành công!");
            //                 $(location).attr('href', 'http://127.0.0.1:5500/Homepage/index.html');
            //                 break;
            //             } else {
            //                 alert("Email hoặc mật khẩu không chính xác!");
            //                 break;
            //             }

            //         }

            //     });

            //     $(".form-signup").submit(function (e) {
            //         e.preventDefault();
            //         let email_signUp = $("[name='email_signup']").val();
            //         let pass_signUp = $("[name='password_signup']").val();
            //         let fullname_signUp = $("[name='fullname_signup']").val();
            //         let hasError = false;

            //         if (!$(".hide-fullname-signup").hasClass('hide')) {
            //             $(".hide-fullname-signup").addClass('hide');
            //         }

            //         if (!$(".hide-email-signup").hasClass('hide')) {
            //             $(".hide-email-signup").addClass('hide');
            //         }

            //         if (!$(".hide-password-signup").hasClass('hide')) {
            //             $(".hide-password-signup").addClass('hide');
            //         }

            //         if (fullname_signUp === "") {
            //             e.preventDefault();
            //             $(".hide-fullname-signup").text('Họ tên không được để trống');
            //             $(".hide-fullname-signup").css(
            //                 {
            //                     "color": "red",
            //                     "font-weight": "bold",
            //                     "font-size": 12
            //                 });
            //             $(".hide-fullname-signup").removeClass('hide');
            //             $("[name='fullname_signup']").focus();
            //             hasError = true;
            //         }

            //         if (email_signUp === "") {
            //             e.preventDefault();
            //             $(".hide-email-signup").text('Email không được để trống');
            //             $(".hide-email-signup").css(
            //                 {
            //                     "color": "red",
            //                     "font-weight": "bold",
            //                     "font-size": 12
            //                 });
            //             $(".hide-email-signup").removeClass('hide');
            //             $("[name='email_signup']").focus();
            //             hasError = true;
            //         }

            //         if (pass_signUp === "") {
            //             e.preventDefault();
            //             $(".hide-password-signup").text('Mật khẩu không được để trống');
            //             $(".hide-password-signup").css(
            //                 {
            //                     "color": "red",
            //                     "font-weight": "bold",
            //                     "font-size": 12
            //                 });
            //             $(".hide-password-signup").removeClass('hide');
            //             $("[name='password_signup']").focus();
            //             hasError = true;
            //         }

                   

            //         for (let i = 0; i < users.length; i++) {
            //             if (email_signUp == users[i].email) {
            //                 alert("Email này đã tồn tại. Vui lòng nhập email khác!");
            //                 break;
            //             } else if (hasError) {
            //                 alert("Vẫn còn trường trống. Vui lòng nhập thêm dữ liệu!");
            //                 break;
            //             } else {
            //                 alert("Đăng ký thành công!");
            //                 $(location).attr('href', '/index.html');
            //                 break;
            //             }
            //         }


            //     });
            // });

        }
        // compile: function MyCtrl($scope, cssInjector)
        // {
        //    
        // }
    };
});
