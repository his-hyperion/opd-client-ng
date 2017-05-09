angular
    .module('newExaminations')
    .controller('newExaminationsController', ['$scope', function ($scope) {
        $scope.CurrentDate = new Date();
        $scope.resetFunction = function () {
            $scope.examination.height = "";
            $scope.examination.weight = "";
            $scope.examination.BMI = "";
            $scope.examination.temp = "";
            $scope.examination.SysBloodPresure = "";
            $scope.examination.DiasBloodPresure = "";


            $scope.examForm.$setPristine();
            $scope.examForm.$setUntouched();
        }
        $scope.customFullscreen = false;

        

        $scope.myname = "pasan";
    }]);