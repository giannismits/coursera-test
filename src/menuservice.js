(function(){
'use strict';

angular.module('MenuApp')
.service('menuItemsService',menuItemsService);

menuItemsService.$inject=['$http',];
function menuItemsService($http,item){
  var service=this;

  console.log(item);
service.getMenuList=function(item){
  // console.log(item);
  var menuList=[];
  var response=$http({
     method:"GET",
     url:"https://davids-restaurant.herokuapp.com/menu_items.json?",
     params:{
       category:item
     }
   })
   .then(function(result){
     for(var i=0;i<result.data.menu_items.length;i++){
       var item={
             name:result.data.menu_items[i].name,
             short_name:result.data.menu_items[i].short_name,
             description:result.data.menu_items[i].description,
             price_small:result.data.menu_items[i].price_small,
             price_large:result.data.menu_items[i].price_large
           };
       menuList.push(item);
     }
   }).catch(function(error){
    console.log("something gone terribly wrong!!");
   });
   return menuList;
   };
   service.removeItems=function(){
     menuList=null
   };
}
})();
