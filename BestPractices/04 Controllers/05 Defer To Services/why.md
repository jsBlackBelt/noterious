_**Defer logic in a controller by delegating to services and factories.**_

Why?: Logic may be reused by multiple controllers when placed within a service and exposed via a function.

Why?: Logic in a service can more easily be isolated in a unit test, while the calling logic in the controller
 can be easily mocked.

Why?: Removes dependencies and hides implementation details from the controller.

Why?: Keeps the controller slim, trim, and focused.

_**Define a controller for a view, and try not to reuse the controller for other views.**_  
Instead, move reusable logic to factories and keep the controller simple and focused on its view.

Why?: Reusing controllers with several views is brittle and good end-to-end (e2e) test coverage is required to 
ensure stability across large applications.