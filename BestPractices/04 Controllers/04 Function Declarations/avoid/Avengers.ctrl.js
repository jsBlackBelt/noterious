/**
 * avoid
 * Using function expressions.
 */
function AvengersController(avengersService, logger) {
    var vm = this;
    vm.avengers = [];
    vm.title = 'Avengers';

    var activate = function() {
        return getAvengers().then(function() {
            logger.info('Activated Avengers View');
        });
    };

    var getAvengers = function() {
        return avengersService.getAvengers().then(function(data) {
            vm.avengers = data;
            return vm.avengers;
        });
    };

    vm.getAvengers = getAvengers;

    activate();
}