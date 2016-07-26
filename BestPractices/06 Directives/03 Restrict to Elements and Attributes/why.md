_**When creating a directive that makes sense as a stand-alone element, allow restrict E (custom element) and
 optionally restrict A (custom attribute).**_
  
_Generally, if it could be its own control, E is appropriate. General guideline is allow EA but lean towards
 implementing as an element when it's stand-alone and as an attribute when it enhances its existing DOM element._

Why?: It makes sense.

Why?: While we can allow the directive to be used as a class, if the directive is truly acting as an element it makes
 more sense as an element or at least as an attribute.

> Note: EA is the default for Angular 1.3 +