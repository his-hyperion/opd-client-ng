angular
    .module('myPatients')
    .controller('myPatientsController', ['$scope', function ($scope) {
        $scope.patient = 'patient name';
    }]);