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

        $scope.getVisits = function () {
            $scope.visits= [{
                visitType:"OPD",
                visitNo : "001",
                dateTime : "2017-05-08",
                complaint : "aa",
                remark : ""
            },
            {
                visitType:"OPD",
                visitNo : "002",
                dateTime : "2017-05-07",
                complaint : "sdff",
                remark : "ds"
            }];
        };

        $scope.getExaminations = function(){
            $scope.examinations = [{
                date:"2017-05-08",
                weight:"78",
                height:"168",
                SBP:"33",
                DBP:"42",
                temperature:"33"
            },
            {
                date:"2017-04-23",
                weight:"78",
                height:"168",
                SBP:"35",
                DBP:"42",
                temperature:"28"
            }]
        };
        $scope.getLabs = function(){
            $scope.labs = [{
                name:"AAA",
                date:"2017-05-08",
                status:"Report issued"
            },
            {
                name:"BBB",
                date:"2017-04-23",             
                status:"Testing",
            }]
        };
        $scope.getAllergies = function(){
            $scope.labs = [{
                name:"",
                date:"",
                status:""
            }]
        }
    }]);