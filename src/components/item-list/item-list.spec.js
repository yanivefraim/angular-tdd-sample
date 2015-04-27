describe('Unit testing item-list directive', function() {
  var $compile,
      $rootScope,
      scope,
      defaultItemsJSON,
      element;

  // Load the angularTDDSample.itemList module, which contains the directive
  beforeEach(module('angularTDDSample.itemList', 'angularTDDSample.item.mock'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, _defaultItemsJSON_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    
    $rootScope = _$rootScope_;

    defaultItemsJSON = _defaultItemsJSON_;

    scope = $rootScope.$new();

    scope.defaultItemsJSON = defaultItemsJSON.data;
  
    element = angular.element('<item-list items="defaultItemsJSON"></item-list>');

    // Compile a piece of HTML containing the directive
    $compile(element)(scope);

    scope.$digest();
    
  }));

  it('Expect "items" to be defined', function() {
    
    var isolated = element.isolateScope();
    
    expect(isolated.items.length).toBeDefined();

  });

  it('Expect "items" to have 100 items', function(){
    var isolated = element.isolateScope();
    
    expect(isolated.items.length).toBe(100);    
  });

  it('Expect element to have items attr', function(){
    expect(element.attr('items')).toBeDefined();
  });

  // it('Expect element to have items attr', function(){
  //   var li = element.find('li'); 
  //   expect(li.length).toBe(100);
  // });
});