angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
  .controller('MainCtrl', function(ItemsModel, $q, $timeout){
    var main = this;
    
    main.title = '$http Interceptors';
    main.message = 'local collection';
  
    main.items = [];
  
  
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

  .factory('myHttpInterceptor', function($q) {
    return {
      // optional method
      'request': function(config) {
        // do something on success
        return config;
      },

      // optional method
     'requestError': function(rejection) {
        // do something on error
        if (false) {
          return //responseOrNewPromise
        }
        return $q.reject(rejection);
      },



      // optional method
      'response': function(response) {
        // do something on success
        return response;
      },

      // optional method
     'responseError': function(rejection) {
        // do something on error
        if (false) {
          return //responseOrNewPromise
        }
        return $q.reject(rejection);
      }
    };
  })

  .config(function($httpProvider) {  
    $httpProvider.interceptors.push('myHttpInterceptor');
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