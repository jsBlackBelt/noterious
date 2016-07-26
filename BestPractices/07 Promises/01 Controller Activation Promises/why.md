_**Resolve start-up logic for a controller in an activate function.**_

Why?: Placing start-up logic in a consistent place in the controller makes it easier to locate, more consistent to test,
 and helps avoid spreading out the activation logic across the controller.

Why?: The controller activate makes it convenient to re-use the logic for a refresh for the controller/View, keeps the
 logic together, gets the user to the View faster, makes animations easy on the ng-view or ui-view, and feels snappier to the user.