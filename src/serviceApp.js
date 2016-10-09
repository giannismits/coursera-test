(function(){
'use strict';

angular.module('MenuApp')
.service('restaurantService',restaurantService);

restaurantService.$inject=['$http'];
function restaurantService($http){
  var service=this;

service.getItems=function(){
  var categories=[];
  var response=$http({
     method:"GET",
     url:"https://davids-restaurant.herokuapp.com/categories.json"
   }).then(function(result){
     for(var i=0;i<result.data.length;i++){
       var item={
             name:result.data[i].name,
             short_name:result.data[i].short_name
           };
       categories.push(item);
     }
   }).catch(function(error){
    console.log("something gone terribly wrong!!");
  });
  return categories;
 };
}
})();
