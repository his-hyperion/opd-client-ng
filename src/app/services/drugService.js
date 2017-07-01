angular
    .module('prescribeDrugs')
    .factory("drugService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/drugs/";        

        return {            
            getDrugs: function () {
                return $http.get(baseURL);
            }
        };
    }]) 