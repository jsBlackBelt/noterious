_**Create a factory that exposes an interface to catch and gracefully handle exceptions.**_

Why?: Provides a consistent way to catch exceptions that may be thrown in your code (e.g. during XHR calls or promise failures).

> Note: The exception catcher is good for catching and reacting to specific exceptions from calls that you know may throw one. For example, when making an XHR call to retrieve data from a remote web service and you want to catch any exceptions from that service and react uniquely.