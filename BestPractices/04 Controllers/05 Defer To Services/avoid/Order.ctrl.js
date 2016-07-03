/* avoid */
function OrderController($http, $q, config, userInfo) {
    var vm = this;
    vm.checkCredit = checkCredit;
    vm.isCreditOk;
    vm.total = 0;

    function checkCredit() {
        var settings = {};
        // Get the credit service base URL from config
        // Set credit service required headers
        // Prepare URL query string or data object with request data
        // Add user-identifying info so service gets the right credit limit for this user.
        // Use JSONP for this browser if it doesn't support CORS
        return $http.get(settings)
            .then(function(data) {
                // Unpack JSON data in the response object
                // to find maxRemainingAmount
                vm.isCreditOk = vm.total <= maxRemainingAmount
            })
            .catch(function(error) {
                // Interpret error
                // Cope w/ timeout? retry? try alternate service?
                // Re-reject with appropriate error for a user to see
            });
    };
}