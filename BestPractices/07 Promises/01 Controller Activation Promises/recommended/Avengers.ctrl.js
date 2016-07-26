/* recommended */
function AvengersController(dataservice) {
    var vm = this;
    vm.avengers = [];
    vm.title = 'Avengers';

    activate();

    ////////////

    function activate() {
        return dataservice.getAvengers().then(function(data) {
            vm.avengers = data;
            return vm.avengers;
        });
    }
}