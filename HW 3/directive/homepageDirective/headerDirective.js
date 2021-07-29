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
            });


                // $(function () {
                //     $(".form-signup").submit(function (e) {
                //         let email_signUp = $("[name='email']").val();
                //     let pass_signUp = $("[name='password']").val();
                //     let hasError = false;

                //     if (!$(".hide-email").hasClass('hide')) {
                //         $(".hide-email").addClass('hide');
                //     }

                //     if (!$(".hide-pass").hasClass('hide')) {
                //         $(".hide-pass").addClass('hide');
                //     }

                //     if (email_signUp === "") {
                //         e.preventDefault();
                //         $(".hide-email-signup").text('Email không được để trống');
                //         $(".hide-email-signup").css(
                //             {
                //                 "color": "red",
                //                 "font-weight": "bold",
                //                 "font-size": 12
                //             });
                //         $(".hide-email").removeClass('hide');
                //         $("[name='email']").focus();
                //         hasError = true;
                //     }

                //     if (pass_signUp === "") {
                //         e.preventDefault();
                //         $(".hide-pass").text('Mật khẩu không được để trống');
                //         $(".hide-pass").css(
                //             {
                //                 "color": "red",
                //                 "font-weight": "bold",
                //                 "font-size": 12
                //             });
                //         $(".hide-pass").removeClass('hide');
                //         $("[name='password']").focus();
                //         hasError = true;
                //     }
                //     }
                // }

                    // e.preventDefault();
                    
                
            
        }
    }
})


                
            


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

    