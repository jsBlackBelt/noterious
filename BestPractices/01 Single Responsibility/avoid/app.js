/* avoid */
angular
    .module('app', ['ngRoute'])
    .controller('SomeController', SomeController)
    .factory('someFactory', someFactory);

function SomeController() { }

function someFactory() { }