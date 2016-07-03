Place bindable members at the top of the controller, alphabetized, and not spread through the controller code.

Why?: Placing bindable members at the top makes it easy to read and helps you instantly identify which members of the
 controller can be bound and used in the View.

Why?: Setting anonymous functions in-line can be easy, but when those functions are more than 1 line of code they can
 reduce the readability. Defining the functions below the bindable members (the functions will be hoisted) moves the
  implementation details down, keeps the bindable members up top, and makes it easier to read.
  
Note: If the function is a 1 liner consider keeping it right up top, as long as readability is not affected.