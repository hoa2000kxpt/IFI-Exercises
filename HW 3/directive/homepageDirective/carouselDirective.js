myWebApp.directive("carouselContent", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/carousel.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Homepage/carousel.css");
        }
    }
});
