
(function(){
  
  'use strict';

  function itemElement() {
    
    function itemElementCtrl () {
      
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
        '</div>'
      ].join(''),
      controllerAs: 'vm',
      controller: itemElementCtrl,
      link: link
    };
  }

  angular
    .module('angularTDDSample.itemElement',[]);

  angular
    .module('angularTDDSample.itemElement')
    .directive('itemElement', itemElement);

}());