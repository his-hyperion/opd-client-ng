angular
    .module('newPatients')
    .factory("patientsService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/patients/";

        return {
            addNewPatient: function (newPatient) {
                //console.log(newPatient);
                return $http.post(baseURL, newPatient);
            },
            getPatients: function () {
                return $http.get(baseURL);
            },
            updatePatient: function (patient_id, patient) {
                return $http.put(baseURL + patient_id, patient);
            }
        };
    }])