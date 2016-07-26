/* avoid */
/* directives.js */

angular
    .module('app.widgets')

    /* order directive that is specific to the order module */
    .directive('orderCalendarRange', orderCalendarRange)

    /* sales directive that can be used anywhere across the sales app */
    .directive('salesCustomerInfo', salesCustomerInfo)

    /* spinner directive that can be used anywhere across apps */
    .directive('sharedSpinner', sharedSpinner);

function orderCalendarRange() {
    /* implementation details */
}

function salesCustomerInfo() {
    /* implementation details */
}

function sharedSpinner() {
    /* implementation details */
}