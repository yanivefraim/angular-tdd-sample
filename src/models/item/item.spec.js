


describe('Service: item', function () {

  var item, httpBackend, defaultJSON;

  beforeEach(function (){
    
  // load the module.
  module('angularTDDSample.item', 'angularTDDSample.item.mock');
    
  // get your service, also get $httpBackend
  // $httpBackend will be a mock, thanks to angular-mocks.js
  inject(function($httpBackend, _item_, _defaultItemsJSON_) {
      item = _item_;      
      httpBackend = $httpBackend;
      defaultJSON = _defaultItemsJSON_;
    });
  });
  
  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a function to get the list', function(){
    expect(item.getList).toBeDefined();
  });
 
  //TODO: how can I 
  it('should get list-items', function () {
      var items;
      //given
      httpBackend.whenGET("http://www.mocky.io/v2/5535581b57bdef59003799bc").respond(defaultJSON);

      //when
      item.getList().then(function(response){
        items = response.data;
      });

      httpBackend.flush();

      //then
      expect(items.length).toBe(100);//toEqual(defaultJSON.data); 

      expect(items.map(function(elm){return elm.first_name;})).toEqual(defaultJSON.data.map(function(elm){return elm.first_name;}));//toEqual(defaultJSON.data);      
      
  });

  it('should have correct first_names', function(){
    var items;
      //given
      httpBackend.whenGET("http://www.mocky.io/v2/5535581b57bdef59003799bc").respond(defaultJSON);

      //when
      item.getList().then(function(response){
        items = response.data;
      });

      httpBackend.flush();

      //then
      expect(items.map(function(elm){return elm.first_name;})).toEqual(defaultJSON.data.map(function(elm){return elm.first_name;}));//toEqual(defaultJSON.data);      
  });
});
