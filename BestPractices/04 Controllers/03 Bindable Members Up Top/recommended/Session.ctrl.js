/* recommended */
function SessionsController(HistoryService) {
    var vm = this;

    vm.back = HistoryService.back; // 1 liner is OK
    vm.gotoSession = gotoSession;
    vm.refresh = refresh;
    vm.search = search;
    vm.sessions = [];
    vm.title = 'Sessions';

    ////////////

    function gotoSession() {
        /* */
    }

    function refresh() {
        /* */
    }

    function search() {
        /* */
    }
}