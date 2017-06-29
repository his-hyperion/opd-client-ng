angular
    .module('visits')
    .controller('visitsController', ['$scope', '$mdDialog', '$filter', function ($scope, $mdDialog, $filter) {

        $scope.visit = {};

        $scope.visit.dateTime = $filter('date')(new Date(), 'MMM d, y h:mm:ss a');
        $scope.visit.doctor = "Dr. A.B.C.Perera";

        //reset form
        $scope.Reset = function () {
            $scope.visit = {};
            $scope.visitsForm.$setPristine();
            $scope.visitsForm.$setUntouched();
            $scope.visit.dateTime = $filter('date')(new Date(), 'MMM d, y h:mm:ss a');
            $scope.visit.doctor = "Dr. A.B.C.Perera";

        }

    }]);