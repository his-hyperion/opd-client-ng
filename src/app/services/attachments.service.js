angular
    .module('attachments')
    .factory("attachmentsService", ['$http', function ($http) {
        var baseURL = "http://52.15.99.209:8080/attachments/";

        return {
            addNewAttachments: function (newAttachment) {
                return $http.post(baseURL, newAttachment);
            },
            getAttachmentByPatient: function (patientID) {
                return $http.get(baseURL + patientID);
            }
        };
    }]) 