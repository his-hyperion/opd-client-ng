angular
    .module('prescribeDrugs')
    .factory("dosageService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/dosages/";        

        return {            
            getDosage: function () {
                return $http.get(baseURL);
            }
        };
    }]) 