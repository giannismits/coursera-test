(function(){
'use strict';

angular.module('MenuApp')
.controller('menuController',menuController);


menuController.$inject=['menuItemsService','item'];
function menuController(menuItemsService,item){
 var menu=this;

   menu.items=menuItemsService.getMenuList(item);
   menu.removeItems=function(){
     menuItemsService.removeItems();
   };



}
})();
