myWebApp.service('goldService', ['goldHttp', '$q', function(goldHttp, $q) {
    return {
        // getSingleProduct: getSingleProduct,
        getAllGoldRateInfo: getAllGoldRateInfo
    };


    function getAllGoldRateInfo() {
        var deferred = $q.defer();
        goldHttp.getAllGoldRateInfo().then (function(data){
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