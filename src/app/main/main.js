
(function(){
	'use strict';

	function getItems (item) {
    return item.getList();
  }; 

	angular.module('angularTDDSample.main', [
    'ui.router', 'angularTDDSample.item', 'angularTDDSample.itemList'
  ])
  .config(function config( $stateProvider ) {
        $stateProvider.state( 'main', {
          url: '/main',
          views: {
            "main": {
              controller: 'MainCtrl',
              controllerAs: 'vm',
              templateUrl: 'main/main.tpl.html',
              resolve: {
                itemListData: getItems
              }
            }
          },
          data:{ pageTitle: 'Main' }
        });
      });  

	angular
			.module('angularTDDSample.main')
			.controller('MainCtrl', MainCtrl);

	function MainCtrl (itemListData) {

		var vm = this;

		vm.items = itemListData.data;

	}		

}());
