


(function(){
  angular
      .module( 'angularTDDSample.main')
      .config(function config( $stateProvider ) {
        $stateProvider.state( 'main', {
          url: '/main',
          views: {
            "main": {
              controller: 'MainCtrl',
              controllerAs: 'vm',
              templateUrl: 'main/main.tpl.html'
            }
          },
          data:{ pageTitle: 'Main' }
        });
      });  
}());

