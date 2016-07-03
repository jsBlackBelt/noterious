angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel, $q, $timeout){
    var main = this;
    
    main.title = 'Chaining Promises';
    main.message = 'Loading...';
    main.items = [];
  
  
    ItemsModel.getItems()
      .then(function(items){
        var newitems = ItemsModel.getNewItem(items, 'six');
        main.items = newitems;
        return newitems;
      })
      .catch(function(err){
        if (err.message === 'somethingIknow') {
          return {};
        } else {
          return $q.reject(err);
        }
      })
      .then(function(items){
        var newitems = ItemsModel.getNewItem(items, 'seven');
        main.items = newitems;
      
        return $timeout(function() {
          // notice I'm uing newitems
          var newNewitems = ItemsModel.getNewItem(newitems, 'eight');
          main.items = newNewitems;
          
        	return newNewitems;
        }, 4000);
      
      })
      .then(function(items){
         return $timeout(function() {
          // notice I'm uing newitems
            var newNewitems = ItemsModel.getNewItem(items, 'nine');
            main.items = newNewitems;
          
        	  return newNewitems;
          }, 4000);
        })
      .catch(function(){
        main.message = 'Error!';
      });
     
  })

  .constant('ENDPOINT_URI', 'items.json')
  .factory('ItemsModel', function($http, $q, ENDPOINT_URI){
    
    function extract(result){
      return result.data;
    }
    
    function getItems() {
      return $http
        .get(ENDPOINT_URI)
        .then(extract);
    }
  
    function getNewItem(items, num) {
      // javascript array clone
      var newItem = items.slice(0);
      newItem.push({
        name: 'item ' + num,
        description: 'promise description'
        
      })
      return newItem;
    }
    
    return {
      getItems: getItems,
      getNewItem: getNewItem
    }
  })
;