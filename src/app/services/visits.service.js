angular
    .module('visits')
    .factory("visitsService", ['$http', function ($http) {
        var baseURL = "http://52.15.99.209:8080/visits/";

        return {
            addNewVisit: function (newVisit) {
                return $http.post(baseURL, newVisit);
            },
            getVisitsByPatient: function (patientID) {
                return $http.get(baseURL + patientID);
            }
        };
    }]) 