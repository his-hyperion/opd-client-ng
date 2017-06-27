angular
    .module('updatePatients')
    .factory("update_patientsService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/api/patients/";

        return {
            updatePatient: function (patient_id, patient) {
                return $http.put(baseURL + patient_id, patient);
            }
        };
    }])