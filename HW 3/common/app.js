
// MODULE
var myWebApp = angular.module('myWebApp', ['angular.css.injector', 'slick', 'ngRoute', 'ui.bootstrap', 'ngStorage', 'angularCSS']);

// ROUTES 
myWebApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider

    .when('/', {
        templateUrl: '/view/Homepage/body.html'
    })

    .when('/productdetails/:id', {
        templateUrl: '/view/Product Details/productDetails.html',
        controller: 'productController'
    })

    .when('/productmenu', {
        templateUrl: '/view/Product Menu/productMenu.html',
        controller: 'productMenuController',
        css: '/view/Product Menu/productMenu.css'
    })

    .when('/contact', {
        templateUrl: '/view/Contact/contact.html',
        css: '/view/Contact/contact.css'
    })

    .when('/emptycart', {
        templateUrl: '/view/Product Details/ProductDetailsCartEmpty.html'
    })

    .when('/productPayment', {
        templateUrl: '/view/Product Payment/productPayment.html',
        css: '/view/Product Payment/productPayment.css'
    })

    .when('/goldenRatePrice', {
        templateUrl: '/view/Gold Rate Price/goldRatePrice.html',
        css: '/view/Gold Rate Price/goldRatePrice.css',
        controller: 'goldRatePriceController'
    })
});


