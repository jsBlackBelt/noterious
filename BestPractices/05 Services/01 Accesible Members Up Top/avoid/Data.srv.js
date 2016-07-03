/**
 * avoid
 * Using function expressions
 */
function dataservice($http, $location, $q, exception, logger) {
    var isPrimed = false;
    var primePromise;

    var getAvengers = function() {
        // implementation details go here
    };

    var getAvengerCount = function() {
        // implementation details go here
    };

    var getAvengersCast = function() {
        // implementation details go here
    };

    var prime = function() {
        // implementation details go here
    };

    var ready = function(nextPromises) {
        // implementation details go here
    };

    var service = {
        getAvengersCast: getAvengersCast,
        getAvengerCount: getAvengerCount,
        getAvengers: getAvengers,
        ready: ready
    };

    return service;
}