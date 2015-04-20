


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
 
  it('should get list-items', inject(function () {
      var items;
      //given
      httpBackend.whenGET("http://www.mocky.io/v2/553399a619e528110ff765d9").respond(defaultJSON);

      //when
      item.getList().then(function(response){
        items = response.data;
      });

      httpBackend.flush();

      //then
      expect(items).toEqual(defaultJSON.data);      
      
  }));
});
