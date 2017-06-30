angular
    .module('opdClient')
    .factory("selectedPatientService", [function () {
        var selectedPatientID;

        return {
            setId: function (id) {
                selectedPatientID = id;
                //console.log(selectedPatientID);
            },
            getId: function() {
                return selectedPatientID;
            }
        };
    }])