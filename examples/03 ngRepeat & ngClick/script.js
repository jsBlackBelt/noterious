angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(){
    var main = this;
    
    main.title = 'ngRepeat & ngClick';
    main.items = [
        {name:'item one', description:'some description'},
        {name:'item two', description:'some description'},
        {name:'item three', description:'some description'},
        {name:'item four', description:'some description'},
        {name:'item five', description:'some description'}
      ];
      
    main.setCurrentItem = function(item) {
      main.currentItem = item;
    };  
  })
;