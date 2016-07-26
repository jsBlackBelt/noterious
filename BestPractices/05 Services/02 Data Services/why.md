_**Refactor logic for making data operations and interacting with data to a factory. Make data services responsible for
 XHR calls, local storage, stashing in memory, or any other data operations.**_

Why?: The controller's responsibility is for the presentation and gathering of information for the view. It should not
 care how it gets the data, just that it knows who to ask for it. Separating the data services moves the logic on how
  to get it to the data service, and lets the controller be simpler and more focused on the view.

Why?: This makes it easier to test (mock or real) the data calls when testing a controller that uses a data service.

Why?: Data service implementation may have very specific code to handle the data repository. This may include headers,
 how to talk to the data, or other services such as `$http`. Separating the logic into a data service encapsulates this
  logic in a single place hiding the implementation from the outside consumers (perhaps a controller), also making it
   easier to change the implementation.
   
   
_**When calling a data service that returns a promise such as $http, return a promise in your calling function too.**_

Why?: You can chain the promises together and take further action after the data call completes and resolves or
 rejects the promise.