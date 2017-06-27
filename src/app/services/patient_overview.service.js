angular
    .module('patientOverview')
    .factory("patients_overviewService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/api/patients";

        return {
            getPatients: function () {
                return $http.get(baseURL);
            },
        };
    }])