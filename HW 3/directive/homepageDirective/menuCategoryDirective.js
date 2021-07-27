myWebApp.directive("menuCategory", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/menuCategory.html',
        cssUrl: '/view/Homepage/menuCategory.css',
        replace: true,
        link: function (scope, element, attribute ) {
            cssInjector.add("/view/Homepage/menuCategory.css");
        }
    }
});
