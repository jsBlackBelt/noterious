/**
 * recommended
 *
 * no globals are left behind
 */

// logger.srv.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('logger', logger);

    function logger() { }
})();