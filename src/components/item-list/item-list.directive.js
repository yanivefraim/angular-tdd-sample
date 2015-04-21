
(function(){
  
  'use strict';

  function itemList() {
    
    function itemListCtrl () {
      
    }

    function link (scope) {

    }

    return {
      restrict: 'E',
      scope: {
        items: "="
      },
      template: [
        '<div>',
        '<ul>',
        '<li ng-repeat="item in items">{{item.first_name}}</li>',
        '</div>'
      ].join(''),
      controllerAs: 'vm',
      controller: itemListCtrl,
      link: link
    };
  }

  angular
    .module('angularTDDSample.itemList',[]);

  angular
    .module('angularTDDSample.itemList')
    .directive('itemList', itemList);

}());