(function(){
'use strict';

angular.module('shoppingListApp',[])
.controller('shoppingListFull',shoppingListFull)
.controller('shoppingListEmpty',shoppingListEmpty)
.provider('shoppingService',serviceProvider);

//first controller of full list item
shoppingListFull.$inject=['shoppingService'];
function shoppingListFull(shoppingService){
  var list1=this;

  list1.items=shoppingService.showList();

  list1.removeItem=function(index){
    list1.check=function(){
      return true;
    };
    try{
      shoppingService.remove(index);
    }catch(error){
      list1.errorMessage=error.message;
    }
  };

}

//second controller of empty (initially) list.
shoppingListEmpty.$inject=['shoppingService'];
function shoppingListEmpty(shoppingService){
  var list2=this;


list2.items=shoppingService.showTheBasketFull();


}

//service
function shoppingService(){
  var service=this;
var itemsInList=[
  {
    name:"cookies",
    quantity:"10"
  },
  {
    name:"pizza",
    quantity:"10"
  },
  {
    name:"chips",
    quantity:"10"
  },
  {
    name:"cake",
    quantity:"10"
  },
  {
    name:"soda",
    quantity:"10"
  }
];
service.showList=function(){
  return itemsInList;
};

var emptyList=[];


service.remove=function(index){
  var item=itemsInList[index];
  var newItem={
    name:item.name,
    quantity:item.quantity
  };
  emptyList.push(newItem);
  itemsInList.splice(index,1);
if(itemsInList.length==0){
  throw new Error("Everything is bought!");
}
};


service.showTheBasketFull=function(){
  return emptyList;
};
}
//provider
function serviceProvider(){
  var provider=this;

  provider.$get=function(){
    var shopping=new shoppingService();
    return shopping;
  };
}

})();
