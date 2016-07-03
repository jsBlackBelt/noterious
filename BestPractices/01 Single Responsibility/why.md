_**Rule of 1** - Define 1 component per file, recommended to be less than 400 lines of code._

Why?: One component per file promotes easier unit testing and mocking.

Why?: One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.

Why?: One component per file avoids hidden bugs that often arise when combining components in a file where they may 
share variables, create unwanted closures, or unwanted coupling with dependencies.


_**Small Functions** - Define small functions, no more than 75 LOC (less is better)._

Why?: Small functions are easier to test, especially when they do one thing and serve one purpose.

Why?: Small functions promote reuse.

Why?: Small functions are easier to read.

Why?: Small functions are easier to maintain.

Why?: Small functions help avoid hidden bugs that come with large functions that share variables with external scope, 
create unwanted closures, or unwanted coupling with dependencies.