(function(){
'use strict';

angular.module('public')
.controller('registrationController',registrationController);

registrationController.$inject=['dishService'];
function registrationController(dishService){
  var reg=this;
  var name=reg.firstName;
  var last=reg.LastName;
  var mail=reg.email;
  var dish=reg.DishName;
  var phone=reg.phone;
  reg.saved=false;
  reg.submit=function(name,last,mail,dish,phone){
    reg.saved=true;
    dishService.customerInfo(name,last,mail,dish,phone);
  };

  reg.infocustomer=dishService.getInfo();

}

})();
