angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel){
    var main = this;
    
    main.title = 'Controller Function';
    
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
  .directive('item', function(){
    var controller = function() {
      var ctrl = this;
      
      ctrl.count = 1;
      
      ctrl.incrementCount = function(){
        ctrl.count += 1;
      }
    }
    
    var linker = function(scope, element, attrs) {
      $(element).hover(
        function() {
          $( this ).css( 'opacity', '0.5' );
        }, function() {
          $( this ).css( 'opacity', '1.0' );
        }
      );
    };
    
    return {
      link: linker,
      templateUrl: 'item.tmpl.html',
      controller: controller,
      controllerAs: 'ctrl'
    }
  })
;