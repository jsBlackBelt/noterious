angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel, $q, $timeout){
    var main = this;
    
    main.title = 'Caching with Promises';
    main.message = 'local collection';
    // initial copy
    main.items = [
      {"id": 1, "name":"item one",   "description":"local description"},
      {"id": 2, "name":"item two",   "description":"local description"},
      {"id": 3, "name":"item three", "description":"local description"},
      {"id": 4, "name":"item four",  "description":"local description"},
      {"id": 5, "name":"item five",  "description":"local description"}
    ];
  
  
    main.getNewItems = function() {
      main.message = 'Loading...';
      
      ItemsModel.getItems()
        .then(function(items){
          main.items = items;
          return items;
        })
        .finally(function(){
          main.message = 'FINALLY DONE!';
        });
    }
  
  
  })

  .constant('ENDPOINT_URI', 'items.json')
  .factory('ItemsModel', function($http, $q, $timeout, ENDPOINT_URI){
    var cacheItems = [
      {"id": 1, "name":"item one",   "description":"cache description"},
      {"id": 2, "name":"item two",   "description":"cache description"},
      {"id": 3, "name":"item three", "description":"cache description"},
      {"id": 4, "name":"item four",  "description":"cache description"},
      {"id": 5, "name":"item five",  "description":"cache description"}
    ];
  
    var cache = {
      items: null
      //items: cacheItems
    };
    
    function extract(result){
      return result.data;
    }
    
    function getItems() {
      if (cache.items) {
        return $q.when(cache.items);
      } else {
        return $http.get(ENDPOINT_URI)
          .then(extract)
          .then(function(items) {
            return $timeout(function() {
              return items;
            }, 2000);
          });
      }
    }
  
    function getNewItem(items, num) {
      // javascript array clone
      var newItem = items.slice(0);
      newItem.push({ name: 'item ' + num, description: 'promise description'})
      return newItem;
    }
    
    return {
      getItems: getItems,
      getNewItem: getNewItem
    }
  })
;