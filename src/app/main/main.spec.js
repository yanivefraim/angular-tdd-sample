
describe('Controller: MainCtrl', function() {
  var scope, itemMockService = {};
  var defer;

  beforeEach(module('angularTDDSample.main', 'angularTDDSample.item.mock'));

  beforeEach(function() {

    module('angularTDDSample.main', function($provide) {
      $provide.value('item', itemMockService);
    });

    inject(function($q, defaultJSON) {
  
      itemMockService.data = defaultJSON.data;

      itemMockService.getItems = function () {

        defer = $q.defer();

        defer.resolve(this.data);

        return defer.promise;
      };
      
      spyOn(itemMockService, 'getItems').andCallThrough();

    }); 
  });

  
  beforeEach(inject(function($controller, $rootScope, _item_) {
    scope = $rootScope.$new();

    item = _item_;

    $controller('MainCtrl as vm',
                {$scope: scope, item: item });

    
    scope.$digest();

  }));

  it("getItems service should have been called", function () {
    expect(itemMockService.getItems).toHaveBeenCalled();
  });

  it("should have items defined", function () {
    expect(scope.vm.items).toBeDefined();
  });

  it("should have items array, equal to mock array", function () {
    expect(scope.vm.items).toEqual(itemMockService.data);
  });
    
});