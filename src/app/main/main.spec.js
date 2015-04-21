
describe('Controller: MainCtrl', function() {
  var scope, defaultItemsJSON;
  var defer;

  beforeEach(module('angularTDDSample.main', 'angularTDDSample.item.mock'));

  // beforeEach(function() {

  //   // //"itemMockService" will be mapped to "item"
  //   // module('angularTDDSample.main', function($provide) {
  //   //   $provide.value('item', itemMockService);
  //   // });

  //   // //inject $q and defaultItemsJSON
  //   // inject(function($q, defaultItemsJSON) {
  
  //   //   itemMockService.data = defaultItemsJSON.data;

  //   //   //mock "getList" method
  //   //   itemMockService.getList = function () {

  //   //     defer = $q.defer();

  //   //     defer.resolve(this.data);

  //   //     return defer.promise;
  //   //   };
      
  //   //   //Spy on "getList" method
  //   //   spyOn(itemMockService, 'getList').andCallThrough();

  //   // }); 
  // });

  
  beforeEach(inject(function($controller, $rootScope, _defaultItemsJSON_) {
    scope = $rootScope.$new();

    defaultItemsJSON = _defaultItemsJSON_;

    //create "MainCtrl" controller
    $controller('MainCtrl as vm',
                {$scope: scope, itemListData: defaultItemsJSON });

    
    scope.$digest();

  }));

  it("should have items defined", function () {
    expect(scope.vm.items).toBeDefined();
  });

  it("should have items array, equal to mock array", function () {
    expect(scope.vm.items).toEqual(defaultItemsJSON.data);
  });
    
});