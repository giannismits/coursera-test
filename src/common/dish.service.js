(function (){
'use strict';

angular.module('common')
.service('dishService',dishService);

dishService.$inject=['$http','ApiPath'];
function dishService($http,ApiPath){
  var service=this;

var info=[];
  service.customerInfo = function (name,lastname,email,phone,dish) {
    return $http.get(ApiPath + '/menu_items/'+dish.toUpperCase()+'.json').then(function (response) {
      var info1={
        name:name,
        lastname:lastname,
        email:email,
        phone:phone,
        favDish:response.data.name
      };
      info.push(info1);
      return info;
    },function (error){
      var info1={
        name:name,
        lastname:lastname,
        email:email,
        phone:phone,
        favDish:'We are so sorry,but this dish does not exist'
      };
      info.push(info1);
      return info;
    });
  };
  service.getInfo=function(){
    return info;
  }
}

})();
