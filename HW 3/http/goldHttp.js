myWebApp.factory('goldHttp', ['$http', '$q', function ($http, $q) {
    return {
        getAllGoldRateInfo: getAllGoldRateInfo
    };

    function getAllGoldRateInfo() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: "http://localhost:3000/GoldRateInfo"
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