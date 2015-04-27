angular.module( 'ngBoilerplate', [
  
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'angularTDDSample.main',
  'angularTDDSample.itemList',
  'angularTDDSample.item',
  'ngBoilerplate.about',
  'ui.router',
  'ngMaterial'

])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/main' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

