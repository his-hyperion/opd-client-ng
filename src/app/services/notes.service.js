angular
    .module('notes')
    .factory("notesService", ['$http', function ($http) {
        var baseURL = "http://52.15.99.209:8080/notes/";

        return {
            addNewNotes: function (newNote) {
                return $http.post(baseURL, newNote);
            },
            getNotesByPatient: function (patientID) {
                return $http.get(baseURL + patientID);
            }
        };
    }]) 