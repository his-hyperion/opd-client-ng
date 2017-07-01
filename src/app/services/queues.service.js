angular.module('opdClient')
    .factory('queuesService', function ($http) {
        var baseURL = 'http://localhost:8080/queues';

        return {
            getQueues: function () {
                
            },
            queuePatient: function (entry) {
                return $http.post(baseURL, entry);
            },
            getQueuedPatients: function () {
                return $http.get(baseURL + '/patients');
            }
        };
    });