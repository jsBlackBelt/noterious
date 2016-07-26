_**Expose the callable members of the service (its interface) at the top, using a technique derived from the Revealing Module Pattern.**_

Why?: Placing the callable members at the top makes it easy to read and helps you instantly identify which members of
 the service can be called and must be unit tested (and/or mocked).

Why?: This is especially helpful when the file gets longer as it helps avoid the need to scroll to see what is exposed.

Why?: Setting functions as you go can be easy, but when those functions are more than 1 line of code they can reduce
 the readability and cause more scrolling. Defining the callable interface via the returned service moves the
  implementation details down, keeps the callable interface up top, and makes it easier to read.
  
Why?: Placing the implementation details of a function later in the file moves that complexity out of view so you can
 see the important stuff up top.
  
Why?: Function declarations are hoisted so there are no concerns over using a function before it is defined (as there
 would be with function expressions).
  
Why?: You never have to worry with function declarations that moving var a before var b will break your code because
 a depends on b.