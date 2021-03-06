angular
    .module('newExaminations')
    .controller('newExaminationsController', ['$scope', '$mdDialog', 'newExaminationsService', function ($scope, $mdDialog, newExaminationsService) {

        $scope.examination = {};

        $scope.addExaminations = function () {

            

            newExaminationsService.addNewExaminations($scope.examination)
                .then(function (response) {
                    // clear form
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('New patient examination details successfuly added to the database.')
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
            $scope.examination.height = "";
            $scope.examination.weight = "";
            $scope.examination.BMI = "";
            $scope.examination.temp = "";
            $scope.examination.SysBloodPresure = "";
            $scope.examination.DiasBloodPresure = "";


            // $scope.examForm.$setPristine();
            // $scope.examForm.$setUntouched();
        }
        // $scope.customFullscreen = false;



        // $scope.myname = "pasan";
    }]);