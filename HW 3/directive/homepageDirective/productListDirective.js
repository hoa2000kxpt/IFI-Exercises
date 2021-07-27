myWebApp.directive("productList", function (cssInjector) {
    return {
        // restrict: 'AECM',
        templateUrl: '/view/Homepage/productList.html',
        replace: true,
        link: function ($scope, element, attribute) {
            cssInjector.add("/view/Homepage/productList.css");
            // Save temporary data based on JSON format
 
        }
    }
});
