(function(){
	/*jshint es5: true */

	angular
		.module('angularTDDSample.item', [])
		.factory('item', item);

	function item($http){
		return {
			getList: getList 
		};

		///////
		function getList(){
			return $http.get('http://www.mocky.io/v2/5535581b57bdef59003799bc')
					.then(getListComplete)
					.catch(getListFailed);

			function getListComplete(response) {
				return response.data;
			}

			function getListFailed(error) {
				console.log('XHR Failed for getAvengers.' + error.data);
			}
		}	
	}	

}());