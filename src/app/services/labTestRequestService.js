angular
    .module('labTestRequest')
    .factory("labTestRequestService", ['$http', function ($http) {
        var baseURL = "http://localhost:8080/labTestRequest/";

        return {
            addLabtest: function (Labtest) {
                console.log(Labtest);
                //console.log(newPatient);
                return $http.post(baseURL, Labtest);
            }
            
        };
    }]) 