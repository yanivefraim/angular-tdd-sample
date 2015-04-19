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
			return $http.get('http://www.mocky.io/v2/553399a619e528110ff765d9')
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