angular.module('dashboard', ['chart.js'])
    .controller('dashboardController', function ($scope, $rootScope) {
        $scope.labels = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
        $scope.series = ['New', 'Recurring'];
        $scope.data = [
            [6, 5, 12, 6, 5, 5, 4],
            [2, 4, 4, 1, 1, 2, 9]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            // fontColor: "#F8F8DD", // this here
                        }
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            // fontColor: "#F8F8DD", // this here
                        }
                    }
                ]
            },
            legend: {
                display: true,
                labels: {
                    // fontColor: '#FEC44F'
                }
            }
        };

        $scope.logOut = function () {
            $rootScope.$broadcast("logout");
        }
    });