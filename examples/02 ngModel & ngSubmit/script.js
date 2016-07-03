angular.module('exercises', [
    'ui.router',
    'ngAnimate',
    'ngMessages'
  ])
  .controller('MainCtrl', function(){
    var main = this;
    
    main.title = 'ngModel & ngSubmit';
    
    main.user = {
      name: 'Han Solo',
      team: 'team x-wing',
      username: 'solo1',
      password: 'insecure'
    };
    
    main.submitUser = function(user) {
      console.log('USER', user);
    };
  })
;