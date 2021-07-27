myWebApp.directive("contactContent", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Contact/contactContent.html',
        replace: true,
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Contact/contactContent.css");
        }
    }
});
