/* recommended */
/* CustomerInfo.drv.js */

/**
 * @desc sales directive that can be used anywhere across the sales app at a company named Acme
 * @example <div acme-sales-customer-info></div>
 */
angular
    .module('sales.widgets')
    .directive('acmeSalesCustomerInfo', salesCustomerInfo);

function salesCustomerInfo() {
    /* implementation details */
}