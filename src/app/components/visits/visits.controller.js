angular
    .module('visits')
    .controller('visitsController', ['$scope', '$mdDialog', '$filter', 'selectedPatientService', 'visitsService', 'authenticationService', function ($scope, $mdDialog, $filter, selectedPatientService, visitsService, authenticationService) {

        $scope.visit = {};
        $scope.visit.patientID = selectedPatientService.getId();

        $scope.visit.dateTime = $filter('date')(new Date(), 'MMM d, y h:mm:ss a');
        $scope.visit.doctor = authenticationService.getLoggedInUser().username;

        //add visits
        $scope.AddVisit = function () {
            visitsService.addNewVisit($scope.visit)
                .then(function (response) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Visits details successfuly added to the database.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.Reset();
                });
        };

        //reset form
        $scope.Reset = function () {
            $scope.visit = {};
            $scope.visitsForm.$setPristine();
            $scope.visitsForm.$setUntouched();
            $scope.visit.dateTime = $filter('date')(new Date(), 'MMM d, y h:mm:ss a');
            $scope.visit.doctor = authenticationService.getLoggedInUser().username;

        };

    }]);