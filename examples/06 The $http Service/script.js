angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel){
    var main = this;
    
    main.title = 'The $http Service';
    
    ItemsModel.getItems()
      .then(function(items){
        main.items = items;
      })
      .catch(function(error){
        main.error = error;
      })
      .finally(function(){
        main.message = 'FINALLY DONE!';
      });
    
      
    main.setCurrentItem = function(item) {
      main.currentItem = item;
    };  
  })
  .constant('ENDPOINT_URI', 'items.json')
  .factory('ItemsModel', function($http, $q, ENDPOINT_URI){
    
    function extract(result){
      return result.data;
    }
    
    function getItems() {
      return $http.get(ENDPOINT_URI).then(extract);
    }
    
    return {
      getItems: getItems
    }
  })
;