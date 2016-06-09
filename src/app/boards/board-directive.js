angular.module('noterious')
    .directive('simpleBoard', function () {
        var linker = function (scope, element, attrs) {
            $(element).hover(
                function() {
                    scope.sayMessage('hovered! ' + scope.board.title);
                    $( this ).css( 'opacity', '0.5' );
                }, function() {
                    scope.sayMessage('dehovered! ' + scope.board.title);
                    $( this ).css( 'opacity', '1.0' );
                }
            );
        };

        var controller = function($scope) {
            $scope.sayMessage = function(message) {
                console.log(message);
            }
        };

        return {
            link: linker,
            controller: controller,
            templateUrl: 'app/boards/simple-board.tmpl.html'
        }
    });