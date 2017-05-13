(function() {
  'use strict';
  //var x =10;
    angular.module('MyFirstApp',[])
      .controller('MyFirstController',function($scope) {
        $scope.name = "Amit";
        $scope.sayHello = function() {
          return "Hello from AngularJS";
        }; // #end of sayHello
      });// # end of MyFirstController
}) //#end of IFIE

();
