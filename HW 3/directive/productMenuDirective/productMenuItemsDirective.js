myWebApp.directive("menuProductsItems", function (cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Product Menu/productMenuItems.html',
        replace: true,
        link: function ($scope, element, attribute) {
            cssInjector.add("/view/Product Menu/productMenuItems.css");
            // cssInjector.add("/view/Homepage/Body/product-list/product-list.css");

            imageCategoryUp = document.getElementById("topDownCategory");
            plusMinusCategory = document.getElementsByClassName('product-filter-category-heading')[0];
            productCategoryDisappeared = document.getElementsByClassName('product-filter-category-body')[0];

            productTypeDisappered = document.getElementsByClassName('product-filter-types-body')[0];
            plusMinusType = document.getElementsByClassName('product-filter-types-heading')[0];
            imageTypeUp = document.getElementById("topDownType");

            productGenderDisappered = document.getElementsByClassName('product-filter-genders-body')[0];
            plusMinusGender = document.getElementsByClassName('product-filter-genders-heading')[0];
            imageGenderUp = document.getElementById("topDownGender");
            // console.log(productCategoryDisappeared);

            plusMinusCategory.addEventListener("click", function () {
                // console.log('He')
                if (productCategoryDisappeared.style.display == "block") {
                    productCategoryDisappeared.style.display = "none";
                    imageCategoryUp.src = "http://baotinmanhhai.vn/img/ico-bottom.png";
                } else {
                    productCategoryDisappeared.style.display = "block";
                    imageCategoryUp.src = "http://baotinmanhhai.vn/img/ico-top.png";
                }
            });

            plusMinusType.addEventListener("click", function () {
                // console.log('He')
                if (productTypeDisappered.style.display == "block") {
                    productTypeDisappered.style.display = "none";
                    imageTypeUp.src = "http://baotinmanhhai.vn/img/ico-bottom.png";
                } else {
                    productTypeDisappered.style.display = "block";
                    imageTypeUp.src = "http://baotinmanhhai.vn/img/ico-top.png";
                }
            });

            plusMinusGender.addEventListener("click", function () {
                // console.log('He')
                if (productGenderDisappered.style.display == "block") {
                    productGenderDisappered.style.display = "none";
                    imageGenderUp.src = "http://baotinmanhhai.vn/img/ico-bottom.png";
                } else {
                    productGenderDisappered.style.display = "block";
                    imageGenderUp.src = "http://baotinmanhhai.vn/img/ico-top.png";
                }
            });


        }
    }
});
