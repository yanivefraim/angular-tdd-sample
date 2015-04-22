describe('Unit testing item-element directive', function() {
  var $compile,
      $rootScope,
      scope,
      defaultItemsJSON,
      element;

  // Load the angularTDDSample.itemList module, which contains the directive
  beforeEach(module('angularTDDSample.itemElement', 'angularTDDSample.item.mock'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, _defaultItemsJSON_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    
    $rootScope = _$rootScope_;

    defaultItemsJSON = _defaultItemsJSON_;

    scope = $rootScope.$new();

    scope.defaultItemJSON = defaultItemsJSON.data[0];
  
    element = angular.element('<item-element item-data="defaultItemJSON"></item-element>');

    // Compile a piece of HTML containing the directive
    $compile(element)(scope);

    scope.$digest();
    
  }));

  it('Expect "item-data" to be defined', function() {
    
    var isolated = element.isolateScope();
    
    expect(isolated.itemData).toBeDefined();

  }); 

  it('Expect "item-data" to have correct data', function(){
    
    var isolated = element.isolateScope();
    
    expect(isolated.itemData).toEqual(defaultItemsJSON.data[0]);
  });

});