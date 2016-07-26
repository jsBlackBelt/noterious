_**Use controller as syntax with a directive to be consistent with using controller as with view and controller pairings.**_

Why?: It makes sense and it's not difficult.

> Note: The directive below demonstrates some of the ways you can use scope inside of link and directive controllers, 
using controllerAs. I in-lined the template just to keep it all in one place.

> Note: Regarding dependency injection, see Manually Identify Dependencies.

> Note: Note that the directive's controller is outside the directive's closure. This style eliminates issues
 where the injection gets created as unreachable code after a return.
 
_**Use bindToController = true when using controller as syntax with a directive when you want to bind the outer scope to the directive's controller's scope.**_
 
Why?: It makes it easy to bind outer scope to the directive's controller scope.
 
> Note: bindToController was introduced in Angular 1.3.0.
 
