/* avoid */

// controller calling the dataservice factory
angular
    .module('app.avengers')
    .controller('AvengersController', AvengersController);

function AvengersController(logger, $http) {
    var vm = this;
    vm.avengers = [];

    activate();

    function activate() {
        return getAvengers().then(function(data) {
            vm.avengers = data;
            return vm.avengers;
        });
    }

    function getAvengers() {
        return $http.get('/api/maa')
            .then(function (response) {
                return response.data.results;
            })
            .catch(function (reason) {
                logger.error('XHR Failed for getAvengers.' + reason.data);
            });
    }
}