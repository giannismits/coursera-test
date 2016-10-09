(function(){
'use strict';

angular.module('MenuApp')
.controller('menuController',menuController)
.service('menuItemsService',menuItemsService);

menuController.$inject=['$stateParams','menuItemsService','itemCategories'];
function menuController($stateParams,menuItemsService,itemCategories){
 var menu=this;

 menu.$onInit=function(){
     var item={
       short:itemCategories[$stateParams.itemId].short_name
     };
     menu.items= menuItemsService.getMenuList(item.short);
 };

}
menuItemsService.$inject=['$http'];
function menuItemsService($http,item){
  var service=this;
  var menuList=[];
service.getMenuList=function(item){
  console.log(item);
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
             short_name:result.data.menu_items[i].short_name
           };
       menuList.push(item);
     }
   }).catch(function(error){
    console.log("something gone terribly wrong!!");
   });
   return menuList;
   console.log(menuList);
   };
}
})();
