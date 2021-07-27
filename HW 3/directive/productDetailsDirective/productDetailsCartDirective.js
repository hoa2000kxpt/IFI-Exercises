myWebApp.directive("productDetailsCart", function (cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Product Details/productDetailsCart.html',
        replace: true,
        link: function ($scope, element, attribute) {
            cssInjector.add("/view/Product Details/productDetailsCart.css");
            $(function () {
                // Get the value of number input
                num = $('input[type="number"]').val();
                
                // cartQuantity = 0;


                // Click [-] button, decrease the number
                $("#minus").click(function () {
                    // alert("No!");
                    if (num > 0) num--;
                    else num;
                    // console.log(num);
                    $('input[type="number"]').val(num)
                });

                // Click [+] button, increase the number
                $("#add").click(function () {
                    // alert("Yes!");
                    num++;
                    // console.log(num);
                    $('input[type="number"]').val(num);
                });

              
            });
        }
    }
});
