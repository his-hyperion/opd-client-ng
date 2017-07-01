angular
    .module('newPatients')
    .factory('uniqueIdService', function () {
    var id = {
        new: function () {
            function _p8() {
                var p = (Math.random() + "000000000").substr(2, 8);
                return p;
            }
            return _p8();
        }
    };

    return id;
})
