angular.module('opdClient')
    .factory('doctorsService', function ($http) {
        var baseURL = 'http://localhost:3002/doctors';

        return {
            getDoctors: function () {
                return $http.get(baseURL);
            }
        }
    });