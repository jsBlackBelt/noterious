angular.module('exercises', [
    'ui.router',
    'ngAnimate'
  ])
    // ------------------
    // const
    // ------------------
    .constant('ClientId', '0123456789')
    .constant('MyConst', {
        prop1: 'value1',
        prop2: 'value2'
    })
    .config(function(ClientId) {
        // do something with ClientId
    })
    .run(function(ClientId) {
        // do something with ClientId
    })
    .controller('ctrl', function(ClientId, MyConst) {
        this.clientId = ClientId;
        this.prop1 = MyConst.prop1;
    })

    // ------------------
    // value
    // ------------------
    .value('ClientId', '0123456789')
    .value('MyVal', {
        prop1: 'value1',
        prop2: 'value2'
    })
    .run(function(ClientId) {
        // do something with ClientId
    })
    .controller('ctrl', function(ClientId, MyVal) {
        this.clientId = ClientId;
        this.prop1 = MyConst.prop1;
        MyVal.prop3 = 'value3';
    })

    // ------------------
    // service
    // ------------------
    .service('MyService', function(ClientId) {
        return {
            reverseArray: function(data) {
                return data.reverse();
            }
        }
    })
    .run(function(MyService) {
        // do something with MyService
    })
    .controller('ctrl', function(MyService) {
        this.data = [1, 2, 3, 4];
        this.manipulatedData = MyService.reverseArray(this.data);
    })

    // ------------------
    // factory
    // ------------------
    .factory('MyOtherService', function(ClientId) {
        var index = -1;
        var service;

        service =  {
            getNextIndex: function(data) {
                index++;
                return data[index];
            }
        };

        return service;
    })
    .run(function(MyOtherService) {
        // do something with MyOtherService
    })
    .controller('ctrl', function(MyOtherService) {
        this.data = [1, 2, 3, 4];
        this.currentItem = MyOtherService.getNextIndex(this.data);
    })

    // ------------------
    // provider
    // ------------------
    .provider('MyConfigurableServiceProvider', function() {
        var index = -1;
        var incrementStep = 1;

        this.setIncrementStep = function(inc) {
            incrementStep = inc;
        };

        this.$get = function(ClientId){
            var service;

            service =  {
                getNextIndex: function(data) {
                    index += incrementStep;
                    return data[index];
                }
            };

            return service;

        };

    })
    .config(function(MyConfigurableServiceProvider) {
        MyConfigurableServiceProvider.setIncrementStep(2);
    })
    .controller('ctrl', function(MyOtherService) {
        this.data = [1, 2, 3, 4];
        this.currentItem = MyOtherService.getNextIndex(this.data);
    })

;