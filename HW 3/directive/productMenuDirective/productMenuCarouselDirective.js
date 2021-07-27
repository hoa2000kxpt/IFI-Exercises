myWebApp.directive("menuProductsCarousel", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Product Menu/productMenuCarousel.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Product Menu/productMenuCarousel.css");
        }
    }
});
