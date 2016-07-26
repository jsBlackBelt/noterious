_**Create one directive per file. Name the file for the directive.**_

Why?: It is easy to mash all the directives in one file, but difficult to then break those out so some are shared
 across apps, some across modules, some just for one module.

Why?: One directive per file is easy to maintain.

> Note: "Best Practice: Directives should clean up after themselves. You can use element.on('$destroy', ...)
 or scope.$on('$destroy', ...) to run a clean-up function when the directive is removed" ... from the Angular documentation.