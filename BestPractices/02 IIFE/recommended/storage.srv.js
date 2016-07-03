/**
 * recommended
 *
 * no globals are left behind
 */

// storage.srv.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage);

    function storage() { }
})();