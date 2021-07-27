myWebApp.factory('productHttp', ['$http', '$q', function ($http, $q) {
    return {
        getSingleProduct: getSingleProduct,
        getAllProducts: getAllProducts
    };

    function getSingleProduct(id) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: "http://localhost:3000/items/" + id
        }).then(function (resSuccess) {
            deferred.resolve(resSuccess.data);
        }, function (resError) {
            console.log(resError);
            deferred.reject(resError);
        }
        );
            return deferred.promise;
    }

    function getAllProducts() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: "http://localhost:3000/items"
        }).then(function (resSuccess) {
            deferred.resolve(resSuccess.data);
        }, function (resError) {
            console.log(resError);
            deferred.reject(resError);
        }
        );
            return deferred.promise;
    }

}])