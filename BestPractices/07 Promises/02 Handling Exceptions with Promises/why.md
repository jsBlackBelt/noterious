_**The catch block of a promise must return a rejected promise to maintain the exception in the promise chain.**_

_Always handle exceptions in services/factories._

Why?: If the catch block does not return a rejected promise, the caller of the promise will not know an exception occurred. The caller's then will execute. Thus, the user may never know what happened.

Why?: To avoid swallowing errors and misinforming the user.