
(function(){
	'use strict';

	angular.module('angularTDDSample.main', [
    'ui.router', 'angularTDDSample.item'
  ]);

	angular
			.module('angularTDDSample.main')
			.controller('MainCtrl', MainCtrl);

	function MainCtrl (item) {
		var vm = this;

		item.getItems().then(function(items){
			vm.items = items;		
		});
	}		

}());
