angular
    .module('prescribeDrugs')
    .controller('prescribeDrugsController', ['$scope', function ($scope) {
        $scope.patientName = 'Ms. Sarah';
        $scope.patientGender = 'Female';
        $scope.patientAge = '25Yrs';
        $scope.patientMaritualState = 'Single';
    }]);