angular
    .module('notes')
    .controller('notesController', ['$scope', '$mdDialog','$filter', function ($scope, $mdDialog, $filter) {

        $scope.notes = {};
        $scope.notes.dateTime = $filter('date')(new Date(), 'MMM d, y');

        //reset form
        $scope.Reset = function () {
            $scope.notes = {};
            $scope.notesForm.$setPristine();
            $scope.notesForm.$setUntouched();   
            $scope.notes.dateTime = $filter('date')(new Date(), 'MMM d, y');

        }

    }]);