(function(){
'use strict';

angular.module('MenuApp')
.component('menuList',{
  templateUrl:'src/template/component.menuitems.html',
  bindings:{
    items:'<'
  }
});
})();
