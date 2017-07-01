angular
    .module('sidebar')
    .directive('sideBar', function(authenticationService) {
        return {
            restrict: 'E',
            templateUrl: function () {
                var acc_type = authenticationService.getLoggedInUser().acc_type;
                if (acc_type === 'doctor') {
                    return './shared/sidebar/sidebar.html';    
                } else if (acc_type === 'nurse') {
                    return './shared/sidebar/sidebar_nurse.html';    
                }
            }
        };
    });