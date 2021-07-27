myWebApp.service('productService', ['productHttp', '$q', function(productHttp, $q) {
    return {
        getSingleProduct: getSingleProduct,
        getAllProducts: getAllProducts
    };

    function getSingleProduct(id) {
        var deferred = $q.defer();
        productHttp.getSingleProduct(id).then (function(data){
            if (data) {
                // console.log(data);
                deferred.resolve(data);
            } else {
                deferred.resolve(data);
                console.log("Errors!")
            }
        });

                return deferred.promise;
        
    }


    function getAllProducts() {
        var deferred = $q.defer();
        productHttp.getAllProducts().then (function(data){
            if (data) {
                console.log(data);
                deferred.resolve(data);
            } else {
                deferred.resolve(data);
                console.log("Errors!")
            }
        });

                return deferred.promise;
    }


}]) 