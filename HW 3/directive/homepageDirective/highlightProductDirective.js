myWebApp.directive("highlightProduct", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/highlightProduct.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Homepage/highlightProduct.css");
        }
    }
});
