
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
        
            '<!-- <img ng-src="{{item.face}}" alt="{{item.who}}" class="md-avatar"> -->',
            '<div class="md-tile-content">',
            '<h3>{{itemData.first_name}} {{itemData.last_name}}</h3>',
            '<h4></h4>',
            '<p>',
            '</p>',
            '</div>',
            '<md-divider inset></md-divider>'
        
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