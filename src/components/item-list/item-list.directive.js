
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
        '<li ng-repeat="item in items">',
        '<item-element item-data="item"></item-element>',
        '</li>',
        '</div>'
      ].join(''),
      controllerAs: 'vm',
      controller: itemListCtrl,
      link: link
    };
  }

  angular
    .module('angularTDDSample.itemList',['angularTDDSample.itemElement']);

  angular
    .module('angularTDDSample.itemList')
    .directive('itemList', itemList);

}());