/**
 * recommended
 * Using function declarations
 * and accessible members up top.
 */
function dataservice($http, $location, $q, exception, logger) {
    var isPrimed = false;
    var primePromise;

    var service = {
        getAvengersCast: getAvengersCast,
        getAvengerCount: getAvengerCount,
        getAvengers: getAvengers,
        ready: ready
    };

    return service;

    ////////////

    function getAvengers() {
        // implementation details go here
    }

    function getAvengerCount() {
        // implementation details go here
    }

    function getAvengersCast() {
        // implementation details go here
    }

    function prime() {
        // implementation details go here
    }

    function ready(nextPromises) {
        // implementation details go here
    }
}