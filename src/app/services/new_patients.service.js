angular
    .module('newPatients')
    .factory("new_patientsService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/api/patients";

        return {
            addNewPatient: function (newPatient) {
                return $http.post(baseURL, newPatient);
            }
        };
    }])