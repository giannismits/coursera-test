(function(){
  'use strict';

  angular.module('lunchApp',[])
  .controller('lunchController',LunchController);
LunchController.$inject['$scope'];
  function LunchController($scope){
    $scope.order=null;
      $scope.check=function(){
        var theorder=$scope.order;
        if($scope.order==null){
          $scope.message="Enter data first";
        }else{
          chackingtheorder();
        }
      function chackingtheorder(){
        var arrayofStrings=theorder.split(",");
        console.log(arrayofStrings);
        var amount=arrayofStrings.length;
        if(amount<=3){
          $scope.message="Enjoy";

        }else {
          $scope.message="too much";
        }
      };
      }

  }

})();
