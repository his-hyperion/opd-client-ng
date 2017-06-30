angular
    .module('attachments')
    .controller('attachmentsController', ['$scope', '$mdDialog', 'selectedPatientService', function ($scope, $mdDialog, selectedPatientService) {

        $scope.attachments = {};
        $scope.patientID = selectedPatientService.getId();
        console.log($scope.patientID);
        $scope.attachments.attBy = "A.T.Silva";

        $scope.click = function (scope, element, attrs) {
            const input = element.find('#fileInput');
            const button = element.find('#uploadButton');

            if (input.length && button.length) {
                button.click((e) => input.click());
            }
        }
        //reset form
        $scope.Reset = function () {
            $scope.attachments = {};
            $scope.attachmentsForm.$setPristine();
            $scope.attachmentsForm.$setUntouched();
            $scope.attachments.attBy = "A.T.Silva";

        }

        $scope.AddAttachments = function () {
            console.log($scope.attachments.file)
        }

    }]);