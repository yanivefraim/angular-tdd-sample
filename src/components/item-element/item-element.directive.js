
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
        itemData: "="
      },
      template: [
        '<div>',
        '{{itemData.first_name}} {{itemData.last_name}}',
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