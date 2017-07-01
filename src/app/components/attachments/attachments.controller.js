angular
    .module('attachments')
    .controller('attachmentsController', ['$scope', '$mdDialog', 'selectedPatientService', 'attachmentsService', 'authenticationService', '$rootScope', function ($scope, $mdDialog, selectedPatientService, attachmentsService, authenticationService,  $rootScope) {

        $scope.attachments = {};
        $scope.attachments.patientID = selectedPatientService.getId();
        $scope.attachments.attBy = "Nurse." + authenticationService.getLoggedInUser().username;

        // add attachments
        $scope.AddAttachments = function () {
            var formData = new FormData();
            angular.forEach($scope.files, function (obj) {
                $scope.attachments.file = $scope.files[0].lfFileName;
                formData.append('files[]', obj.lfFile);
            });

            attachmentsService.addNewAttachments($scope.attachments)
                .then(function (response) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Attachment successfuly added to the database.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.Reset();
                }); 
        }
        //reset form
        $scope.Reset = function () {
            $scope.attachments = {};
            $scope.attachmentsForm.$setPristine();
            $scope.attachmentsForm.$setUntouched();
            $scope.attachments.attBy = "Nurse." + authenticationService.getLoggedInUser().username;

        }

        $scope.logOut = function () {
            $rootScope.$broadcast("logout");
        }


    }]);