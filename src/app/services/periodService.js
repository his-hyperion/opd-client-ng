angular
    .module('prescribeDrugs')
    .factory("periodService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/period/";        

        return {            
            getPeriod: function () {
                return $http.get(baseURL);
            }
        };
    }]) 

