
(function(){
  
  'use strict';

  function itemList() {
    
    function itemListCtrl () {

    }

    function link () {

    }

    return {
      restrict: 'E',
      scope: {},
      template: [
        '<div>',
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