angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel){
    var main = this;
    
    main.title = 'Promote to Services';
    main.items = ItemsModel.getItems();
      
    main.setCurrentItem = function(item) {
      main.currentItem = item;
    };  
  })
  // This allows for reuse of the items model service, for example:
  //.controller('CountCtrl', function(ItemsModel){
  //  var ctrl = this;
  //
  //  ctrl.itemsCount = ItemsModel.getItems().length;
  //
  //})
  .factory('ItemsModel', function(){

    var items = [
        {name:'item one', description:'some description'},
        {name:'item two', description:'some description'},
        {name:'item three', description:'some description'},
        {name:'item four', description:'some description'},
        {name:'item five', description:'some description'}
      ];
      
    function getItems() {
      return items;
    }

    // module reveal pattern
    return {
      getItems: getItems
    }
  })
;