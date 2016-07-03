Use function declarations to hide implementation details. Keep your bindable members up top. When you need to bind a
 function in a controller, point it to a function declaration that appears later in the file. This is tied directly to
  the section Bindable Members Up Top. For more details see this post.

Why?: Placing bindable members at the top makes it easy to read and helps you instantly identify which members of the
 controller can be bound and used in the View. (Same as above.)

Why?: Placing the implementation details of a function later in the file moves that complexity out of view so you can
 see the important stuff up top.

Why?: Function declarations are hoisted so there are no concerns over using a function before it is defined (as there
 would be with function expressions).

Why?: You never have to worry with function declarations that moving var a before var b will break your code because
 a depends on b.

Why?: Order is critical with function expressions