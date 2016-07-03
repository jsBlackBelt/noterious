angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel){
    var main = this;
    
    main.title = 'Promises';
    main.startTime = new Date().getTime();
    
    ItemsModel.getItems()
      .then(function(items){
        main.items = items;
      })
      .catch(function(error){
        main.error = error;
      })
      .finally(function(){
          main.message = 'FINALLY DONE!';
          main.endTime = new Date().getTime();

      });
    
      
    main.setCurrentItem = function(item) {
      main.currentItem = item;
    };  
  })
  .factory('ItemsModel', function($q, $timeout){
    var items = [
        {name:'item one', description:'some description'},
        {name:'item two', description:'some description'},
        {name:'item three', description:'some description'},
        {name:'item four', description:'some description'},
        {name:'item five', description:'some description'}
      ];
      
    function getItems() {
      var deferred = $q.defer();

      $timeout(function() {
          deferred.resolve(items);
           //deferred.reject('No items here!');

      }, 2000);

      return deferred.promise;
    }
    
    return {
      getItems: getItems
    }
  })
;