angular
    .module('prescribeDrugs')
    .factory("drugDetailsService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/drugDetails/";        

        return {
            addDrugDetails: function (drugDetails) {
                console.log( drugDetails);
                return $http.post(baseURL, drugDetails);
            },            
            getDrugDetails: function () {
                return $http.get(baseURL);
            }
        };
    }]) 