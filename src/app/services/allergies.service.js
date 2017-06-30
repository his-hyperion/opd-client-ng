angular
    .module('alergies')
    .factory("allergyService", ['$http', function ($http) {
        var baseURL = "http://52.15.99.209:8080/allergies/";

        return {
            addNewAllergy: function (newAllergy) {
                return $http.post(baseURL, newAllergy);
            },
            getallergiesByPatient: function (patientID) {
                return $http.get(baseURL + patientID);
            }
        };
    }]) 