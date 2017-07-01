angular
    .module('prescribeDrugs')
    .factory("frequencyService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/frequency/";        

        return {            
            getFrequency: function () {
                return $http.get(baseURL);
            }
        };
    }]) 