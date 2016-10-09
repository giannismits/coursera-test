(function(){
'use strict'

angular.module('MenuApp')
.config(RouterConfig);

RouterConfig.$inject=['$stateProvider','$urlRouterProvider'];

function RouterConfig($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url:'/',
    templateUrl:'src/template/template.home.html'
  })

  .state('categ',{
    url:'/categ',
    templateUrl:'src/template/component.category.html',
    controller:'mainController as main',
    resolve:{
      itemCategories:['restaurantService', function(restaurantService){
        return restaurantService.getItems();
      }]
    }
  })

  .state('categ.menu',{
    url:'/menu/{itemId}',
    templateUrl:'src/template/template.menuitems.html',
    controller:'menuController as menu',
  });
}

})();
