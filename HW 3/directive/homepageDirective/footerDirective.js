myWebApp.directive("footerContent", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/footer.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Homepage/footer.css");
        }
    }
});
