angular
    .module('labTestRequest')
    .controller('labTestRequestController', ['$scope', '$mdDialog', 'newExaminationsService', function ($scope, $mdDialog, newExaminationsService) {

        $scope.labtestRequest = {};

        $scope.addlabtestRequest = function () {



            labTestRequestService.addLabtest($scope.labtestRequest)
                .then(function (response) {
                    // clear form
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Lab test details successfuly added to the database.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.Reset();
                });


        };

        //reset form
        $scope.Reset = function () {
            $scope.examination = {};
            $scope.examForm.$setPristine();
            $scope.examForm.$setUntouched();
        }


        $scope.CurrentDate = new Date();
        $scope.resetFunction = function () {
            $scope.labtestRequest.HIN = "";
            $scope.labtestRequest.dueDate = "";
            $scope.labtestRequest.comment = "";
           


            // $scope.examForm.$setPristine();
            // $scope.examForm.$setUntouched();
        }
        // $scope.customFullscreen = false;



        // $scope.myname = "pasan";
    }]);