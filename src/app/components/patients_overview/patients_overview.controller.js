angular
    .module('patientOverview')
    .controller('patientsOverviewController', ['$scope', function ($scope) {
        $scope.name = "Mr.Mahesh";
        $scope.HIN = "12542252";
        $scope.gender = "Male";
        $scope.civilStatus = "Married";
        $scope.dob = "09-09-1990";
        $scope.phone = "07221654789";
        $scope.address = "Colombo";
        $scope.bloodGroup = "A+";
        $scope.BMI = "Not Calculated";
    }]);