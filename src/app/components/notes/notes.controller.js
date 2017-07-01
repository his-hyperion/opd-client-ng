angular
    .module('notes')
    .controller('notesController', ['$scope', '$mdDialog', '$filter', 'selectedPatientService', 'notesService', '$rootScope', function ($scope, $mdDialog, $filter, selectedPatientService, notesService, $rootScope) {

        $scope.notes = {};
        $scope.notes.patientID = selectedPatientService.getId();
        $scope.notes.dateTime = $filter('date')(new Date(), 'MMM d, y');

        //add notes
        $scope.AddNotes = function () {
            notesService.addNewNotes($scope.notes)
                .then(function (response) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Note details successfuly added to the database.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.Reset();
                });
        }

        //reset form
        $scope.Reset = function () {
            $scope.notes = {};
            $scope.notesForm.$setPristine();
            $scope.notesForm.$setUntouched();
            $scope.notes.dateTime = $filter('date')(new Date(), 'MMM d, y');

        }

        $scope.logOut = function () {
            $rootScope.$broadcast("logout");
        }

    }]);