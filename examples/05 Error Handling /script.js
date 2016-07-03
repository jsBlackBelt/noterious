angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel, $q, $timeout){
    var main = this;
    
    main.title = '$exceptionHandler';
    main.message = 'local collection';
  
    main.items = [];
  
  
    main.getNewItems = function() {
      main.message = 'Loading...';
      
      ItemsModel.getItems()
        .then(function(items){
          syntax_error
          return items;
        })
        .catch(function(){
          main.message = 'ERROR!';
        });
    }
  
  
  })
  .factory('$exceptionHandler', function() {
    function customErrorLogging(exception, cause) {
      console.log('log my data on server', exception, cause);
      alert('AA error: ' + exception + cause);
      //throw exception;
    }
    return customErrorLogging;
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