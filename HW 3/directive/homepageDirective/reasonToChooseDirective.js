myWebApp.directive("reasonToChoose", function(cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/ReasonToChoose.html',
        replace: true, 
        link: function ($scope, element, attribute ) {
            cssInjector.add("/view/Homepage/reasonToChoose.css");
        }
    }
});
