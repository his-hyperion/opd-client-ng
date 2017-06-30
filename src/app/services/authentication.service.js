angular.module('opdClient')
    .factory('authenticationService', function($http) {
        var baseURL = 'http://localhost:8080/authenticate';

        return {
            authenticate: function (user) {
                return $http.post(baseURL, user);
            },
            setLoggedInUser: function (user) {
                sessionStorage.setItem('user', JSON.stringify(user));
                sessionStorage.setItem('authenticated', true);
            },
            getLoggedInUser: function () {
                return JSON.parse(sessionStorage.getItem('user'));
            },
            isAuthenticated: function () {
                return JSON.parse(sessionStorage.getItem('authenticated'));
            }
        };
    });