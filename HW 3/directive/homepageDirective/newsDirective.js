myWebApp.directive("news", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/news.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Homepage/news.css");
        }
    }
});
