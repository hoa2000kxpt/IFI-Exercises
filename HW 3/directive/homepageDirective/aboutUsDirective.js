myWebApp.directive("aboutUs", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/Body/about-us/about-us.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Homepage/Body/about-us/about-us.css");
        }
    }
});
