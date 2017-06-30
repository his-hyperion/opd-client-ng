angular.module('opdClient')
    .factory('authenticationService', function($http) {
        var baseURL = 'http://localhost:8080/authenticate';
        var loggedInUser;
        var authenticated = false;

        return {
            authenticate: function (user) {
                return $http.post(baseURL, user);
            },
            setLoggedInUser: function (user) {
                loggedInUser = user;
                authenticated = true;
            },
            getLoggedInUser: function () {
                return loggedInUser;
            },
            isAuthenticated: function () {
                return authenticated;
            }
        };
    });