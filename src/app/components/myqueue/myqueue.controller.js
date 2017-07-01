angular.module('opdClient')
    .controller('myQueueController', function ($scope, queuesService, authenticationService) {
        // var doctor_id = authenticationService.getLoggedInUser()._id;
        var doctor_id = authenticationService.getLoggedInUser().username;

        queuesService.getQueuedPatientsForDoctor(doctor_id)
            .then(function (response) {
                $scope.patients = {};

                var patients = response.data[0].patients;
                for (var i = 0; i < patients.length; i++) {
                    $scope.patients[patients[i]._id] = patients[i];
                }
            });


        $scope.selectpatient = function (patient) {
            $scope.selectedPatient = angular.copy(patient);
            console.log($scope.selectedPatient.firstName);
        }    

        $scope.removePatient = function (patient) {
            delete $scope.patients[patient._id];
        };
    });