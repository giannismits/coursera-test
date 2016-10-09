(function(){
'use strict';

angular.module('MenuApp')
.component('catList',{
  templateUrl:'src/template/template.category.html',
  bindings:{
    items:'<'
  }
});
})();
