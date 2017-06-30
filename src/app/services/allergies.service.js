angular
    .module('alergies')
    .factory("allergyService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/allergies/";

        return {
            addNewAllergy: function (newAllergy) {
                return $http.post(baseURL, newAllergy);
            },
            getallergiesByPatient: function (patientID) {
                return $http.get(baseURL + patientID);
            }
        };
    }]) 