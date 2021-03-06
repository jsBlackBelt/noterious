_**Use the `controllerAs` View syntax** over the `classic controller with $scope` syntax._

Why?: Controllers are constructed, "newed" up, and provide a single new instance, and the `controllerAs` syntax is 
closer to that of a JavaScript constructor than the `classic $scope syntax`.

Why?: It promotes the use of binding to a "dotted" object in the View (e.g. `customer.name` instead of `name`), which is
 more contextual, easier to read, and avoids any reference issues that may occur without "dotting".

Why?: Helps avoid using `$parent` calls in Views with nested controllers.


_**Use the `controllerAs` Controller syntax** over the `classic controller with $scope` syntax._

The `controllerAs` syntax uses `this` inside controllers which gets bound to `$scope`

Why?: `controllerAs` is syntactic sugar over `$scope`. You can still bind to the View and still access `$scope` methods.

Why?: Helps avoid the temptation of using `$scope` methods inside a controller when it may otherwise be better to avoid
 them or move the method to a factory, and reference them from the controller. Consider using `$scope` in a controller 
 only when needed. For example when publishing and subscribing events using `$emit`, `$broadcast`, or `$on`.