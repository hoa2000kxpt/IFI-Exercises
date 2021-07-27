myWebApp.directive("services", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/services.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Homepage/services.css");
        }
    }
});
