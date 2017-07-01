angular.module('opdClient')
    .controller('queuesController', function ($scope, doctorsService, patientsService, $mdToast, queuesService) {
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        $scope.toastPosition = angular.extend({}, last);

        $scope.getToastPosition = function () {
            sanitizePosition();

            return Object.keys($scope.toastPosition)
                .filter(function (pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };

        $scope.getToastPosition = function () {
            sanitizePosition();

            return Object.keys($scope.toastPosition)
                .filter(function (pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };
        $scope.showSimpleToast = function () {
            var pinTo = $scope.getToastPosition();

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Patient queued!')
                    .position(pinTo)
                    .hideDelay(3000)
            );
        };
        function sanitizePosition() {
            var current = $scope.toastPosition;

            if (current.bottom && last.top) current.top = false;
            if (current.top && last.bottom) current.bottom = false;
            if (current.right && last.left) current.left = false;
            if (current.left && last.right) current.right = false;

            last = angular.extend({}, current);
        }

        doctorsService.getDoctors()
            .then(function (response) {
                $scope.doctors = response.data;
            });

        $scope.loadPatients = function () {
            queuesService.getQueuedPatients()
                .then(function (queuedPatients) {
                    patientsService.getPatients()
                        .then(function (response) {
                            $scope.patients = [];
                            var in_queue = [];

                            if (queuedPatients.data[0]) {
                                for (var j = 0; j < queuedPatients.data.length; j++) {
                                    var patient = queuedPatients.data[j].patients;

                                    for (var k = 0; k < patient.length; k++) {
                                            if (in_queue.indexOf(patient[k]) == -1) {
                                                in_queue.push(patient[k]);
                                            }
                                    }
                                }
                            } else {
                                $scope.patients = response.data;
                                return;
                            }

                            for (var i in response.data) {
                                var pid = response.data[i]._id;
                                
                                if (in_queue.indexOf(pid) == -1) {
                                    $scope.patients.push(response.data[i]);
                                }
                            }
                        });
                });
        };

        $scope.loadPatients();

        $scope.queuePatient = function (queue) {
            queuesService.queuePatient(queue)
                .then(function (res) {
                    $scope.showSimpleToast();
                    $scope.loadPatients();

                    // clear select
                    queue.patients = null;
                });
        }
    });