/* recommended */

// controller calling the dataservice factory
angular
    .module('app.avengers')
    .controller('AvengersController', AvengersController);

function AvengersController(dataservice, logger) {
    var vm = this;
    vm.avengers = [];

    activate();

    function activate() {
        /**
         * Step 1
         * Ask the getAvengers function for the
         * avenger data and wait for the promise
         */
        return getAvengers().then(function() {
            /**
             * Step 4
             * Perform an action on resolve of final promise
             */
            logger.info('Activated Avengers View');
        });
    }

    function getAvengers() {
        /**
         * Step 2
         * Ask the data service for the data and wait
         * for the promise
         */
        return dataservice.getAvengers()
            .then(function(data) {
                /**
                 * Step 3
                 * set the data and resolve the promise
                 */
                vm.avengers = data;
                return vm.avengers;
            });
    }
}