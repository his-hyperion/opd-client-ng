angular
    .module('newExaminations')
    .factory("newExaminationsService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/newExaminations/";

        return {
            addNewExaminations: function (newExamination) {
                console.log(newExamination);
                //console.log(newPatient);
                return $http.post(baseURL, newExamination);
            }
            
        };
    }]) 