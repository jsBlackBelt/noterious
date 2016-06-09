'use strict';

angular.module('noterious.common')
  .service('BoardsModel', function ($http, UserModel, ENDPOINT_URI, $q) {
    var service = this;

    // step 1:
    service.boards = {  
        1: {
            description: "Anything and everything!",
            isPublic: true,
            title: "Random Ideas"
        },
        2: {
            description: "BizDev Ideas",
            isPublic: false,
            title: "Hustle"
        },
        3: {
            description: "this is a test",
            isPublic: false,
            title: "testing"
        }
    };
      
    //  step 2:
    // var boards = {
    //     1: {
    //         description: "Anything and everything!",
    //         isPublic: true,
    //         title: "Random Ideas"
    //     },
    //     2: {
    //         description: "BizDev Ideas",
    //         isPublic: false,
    //         title: "Hustle"
    //     },
    //     3: {
    //         description: "this is a test",
    //         isPublic: false,
    //         title: "testing"
    //     }
    // };
    //
    // service.all = function() {
    //     var  deferred = $q.defer();
    //
    //     promise.resolve(boards);
    //
    //     return deferred.promise;
    // }


      //  step 3:
      // function extract(result) {
      //     return result.data;
      // }
      //
      // function getUrl() {
      //     return ENDPOINT_URI + 'users/' + UserModel.getCurrentUser() + '/boards.json';
      // }
      //
      // service.all = function () {
      //     return $http.get(getUrl()).then(extract);
      // };
  });