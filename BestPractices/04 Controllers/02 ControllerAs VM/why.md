Use a capture variable for `this` when using the `controllerAs` syntax. Choose a consistent variable name such as vm, 
which stands for ViewModel.

Why?: The `this` keyword is contextual and when used within a function inside a controller may change its context. 
Capturing the context of `this` avoids encountering this problem.