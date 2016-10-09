(function(){
'use strict';

angular.module('MenuApp')
.controller('mainController',mainController);

mainController.$inject=['itemCategories'];
function mainController(itemCategories){
 var main=this;
 main.items=itemCategories;
}

})();
