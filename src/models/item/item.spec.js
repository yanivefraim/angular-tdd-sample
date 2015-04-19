


describe('Service: item', function () {

  var item, httpBackend;

  var itemsResponse = {"data": [{
  "id": 1,
  "first_name": "James",
  "last_name": "Stephens",
  "email": "jstephens0@tinyurl.com",
  "country": "Japan",
  "ip_address": "245.158.44.208"
}, {
  "id": 2,
  "first_name": "Melissa",
  "last_name": "Hunter",
  "email": "mhunter1@huffingtonpost.com",
  "country": "Russia",
  "ip_address": "121.87.233.52"
}, {
  "id": 3,
  "first_name": "Stephanie",
  "last_name": "Griffin",
  "email": "sgriffin2@google.co.jp",
  "country": "Russia",
  "ip_address": "30.248.251.129"
}, {
  "id": 4,
  "first_name": "Rose",
  "last_name": "Meyer",
  "email": "rmeyer3@cafepress.com",
  "country": "Brazil",
  "ip_address": "7.136.76.71"
}, {
  "id": 5,
  "first_name": "Nancy",
  "last_name": "Davis",
  "email": "ndavis4@washington.edu",
  "country": "Brazil",
  "ip_address": "36.212.2.187"
}, {
  "id": 6,
  "first_name": "Helen",
  "last_name": "Willis",
  "email": "hwillis5@ning.com",
  "country": "Japan",
  "ip_address": "50.128.164.19"
}, {
  "id": 7,
  "first_name": "Gerald",
  "last_name": "Castillo",
  "email": "gcastillo6@sphinn.com",
  "country": "Guinea",
  "ip_address": "254.213.246.48"
}, {
  "id": 8,
  "first_name": "Jonathan",
  "last_name": "Owens",
  "email": "jowens7@ed.gov",
  "country": "China",
  "ip_address": "50.159.61.77"
}, {
  "id": 9,
  "first_name": "Katherine",
  "last_name": "Alexander",
  "email": "kalexander8@prweb.com",
  "country": "China",
  "ip_address": "0.120.52.231"
}, {
  "id": 10,
  "first_name": "Carol",
  "last_name": "Bailey",
  "email": "cbailey9@weather.com",
  "country": "Bangladesh",
  "ip_address": "156.38.37.128"
}, {
  "id": 11,
  "first_name": "Adam",
  "last_name": "Hansen",
  "email": "ahansena@archive.org",
  "country": "Mexico",
  "ip_address": "184.9.69.152"
}, {
  "id": 12,
  "first_name": "Henry",
  "last_name": "Frazier",
  "email": "hfrazierb@symantec.com",
  "country": "Austria",
  "ip_address": "44.212.65.187"
}, {
  "id": 13,
  "first_name": "Benjamin",
  "last_name": "Wood",
  "email": "bwoodc@bigcartel.com",
  "country": "Russia",
  "ip_address": "183.25.99.77"
}, {
  "id": 14,
  "first_name": "Ashley",
  "last_name": "Lawson",
  "email": "alawsond@reddit.com",
  "country": "Russia",
  "ip_address": "81.29.232.206"
}, {
  "id": 15,
  "first_name": "Virginia",
  "last_name": "Crawford",
  "email": "vcrawforde@naver.com",
  "country": "Norway",
  "ip_address": "123.113.1.86"
}, {
  "id": 16,
  "first_name": "Carlos",
  "last_name": "Burke",
  "email": "cburkef@disqus.com",
  "country": "Russia",
  "ip_address": "117.164.233.106"
}, {
  "id": 17,
  "first_name": "Paul",
  "last_name": "Day",
  "email": "pdayg@lycos.com",
  "country": "Democratic Republic of the Congo",
  "ip_address": "212.188.134.124"
}, {
  "id": 18,
  "first_name": "Mark",
  "last_name": "Ramos",
  "email": "mramosh@so-net.ne.jp",
  "country": "Slovenia",
  "ip_address": "244.89.18.234"
}, {
  "id": 19,
  "first_name": "Donald",
  "last_name": "Garcia",
  "email": "dgarciai@opensource.org",
  "country": "Canada",
  "ip_address": "236.155.29.56"
}, {
  "id": 20,
  "first_name": "Roger",
  "last_name": "Gutierrez",
  "email": "rgutierrezj@sciencedaily.com",
  "country": "Indonesia",
  "ip_address": "208.247.70.49"
}, {
  "id": 21,
  "first_name": "Arthur",
  "last_name": "Stephens",
  "email": "astephensk@cnet.com",
  "country": "Egypt",
  "ip_address": "61.157.139.1"
}, {
  "id": 22,
  "first_name": "Randy",
  "last_name": "Wells",
  "email": "rwellsl@lulu.com",
  "country": "China",
  "ip_address": "90.207.5.47"
}, {
  "id": 23,
  "first_name": "Joe",
  "last_name": "Jacobs",
  "email": "jjacobsm@amazon.de",
  "country": "Indonesia",
  "ip_address": "48.250.234.157"
}, {
  "id": 24,
  "first_name": "Earl",
  "last_name": "James",
  "email": "ejamesn@cloudflare.com",
  "country": "China",
  "ip_address": "234.252.184.92"
}, {
  "id": 25,
  "first_name": "Earl",
  "last_name": "George",
  "email": "egeorgeo@smh.com.au",
  "country": "Burundi",
  "ip_address": "246.159.78.20"
}, {
  "id": 26,
  "first_name": "Jessica",
  "last_name": "Turner",
  "email": "jturnerp@netscape.com",
  "country": "Kuwait",
  "ip_address": "12.174.14.253"
}, {
  "id": 27,
  "first_name": "Michelle",
  "last_name": "Weaver",
  "email": "mweaverq@abc.net.au",
  "country": "Indonesia",
  "ip_address": "122.242.210.25"
}, {
  "id": 28,
  "first_name": "Kathy",
  "last_name": "Gibson",
  "email": "kgibsonr@oakley.com",
  "country": "China",
  "ip_address": "141.100.221.172"
}, {
  "id": 29,
  "first_name": "Heather",
  "last_name": "Jacobs",
  "email": "hjacobss@cdc.gov",
  "country": "France",
  "ip_address": "176.60.237.189"
}, {
  "id": 30,
  "first_name": "Cheryl",
  "last_name": "Flores",
  "email": "cflorest@themeforest.net",
  "country": "Portugal",
  "ip_address": "37.170.34.83"
}, {
  "id": 31,
  "first_name": "Julie",
  "last_name": "Ruiz",
  "email": "jruizu@ezinearticles.com",
  "country": "Ukraine",
  "ip_address": "127.118.202.19"
}, {
  "id": 32,
  "first_name": "Arthur",
  "last_name": "Fowler",
  "email": "afowlerv@histats.com",
  "country": "Micronesia",
  "ip_address": "123.156.155.232"
}, {
  "id": 33,
  "first_name": "Jesse",
  "last_name": "Hawkins",
  "email": "jhawkinsw@opensource.org",
  "country": "Russia",
  "ip_address": "151.115.114.10"
}, {
  "id": 34,
  "first_name": "Fred",
  "last_name": "Howell",
  "email": "fhowellx@constantcontact.com",
  "country": "China",
  "ip_address": "52.182.157.204"
}, {
  "id": 35,
  "first_name": "Matthew",
  "last_name": "Riley",
  "email": "mrileyy@unicef.org",
  "country": "Russia",
  "ip_address": "207.151.128.23"
}, {
  "id": 36,
  "first_name": "Dorothy",
  "last_name": "Bishop",
  "email": "dbishopz@wordpress.org",
  "country": "China",
  "ip_address": "27.215.53.18"
}, {
  "id": 37,
  "first_name": "Judith",
  "last_name": "Kelly",
  "email": "jkelly10@prweb.com",
  "country": "China",
  "ip_address": "90.204.217.77"
}, {
  "id": 38,
  "first_name": "James",
  "last_name": "Fuller",
  "email": "jfuller11@imdb.com",
  "country": "Mexico",
  "ip_address": "39.57.68.33"
}, {
  "id": 39,
  "first_name": "Susan",
  "last_name": "Owens",
  "email": "sowens12@answers.com",
  "country": "Russia",
  "ip_address": "16.21.135.92"
}, {
  "id": 40,
  "first_name": "Todd",
  "last_name": "Ortiz",
  "email": "tortiz13@myspace.com",
  "country": "Indonesia",
  "ip_address": "222.193.229.216"
}, {
  "id": 41,
  "first_name": "William",
  "last_name": "Alvarez",
  "email": "walvarez14@yolasite.com",
  "country": "Philippines",
  "ip_address": "202.43.43.158"
}, {
  "id": 42,
  "first_name": "Shawn",
  "last_name": "Rodriguez",
  "email": "srodriguez15@economist.com",
  "country": "Azerbaijan",
  "ip_address": "146.152.191.81"
}, {
  "id": 43,
  "first_name": "Betty",
  "last_name": "Ray",
  "email": "bray16@chronoengine.com",
  "country": "Portugal",
  "ip_address": "240.26.134.62"
}, {
  "id": 44,
  "first_name": "Nicholas",
  "last_name": "Black",
  "email": "nblack17@elegantthemes.com",
  "country": "Nigeria",
  "ip_address": "75.176.118.247"
}, {
  "id": 45,
  "first_name": "Randy",
  "last_name": "Jackson",
  "email": "rjackson18@ow.ly",
  "country": "United States",
  "ip_address": "150.125.221.115"
}, {
  "id": 46,
  "first_name": "Steve",
  "last_name": "Meyer",
  "email": "smeyer19@histats.com",
  "country": "Afghanistan",
  "ip_address": "234.51.211.35"
}, {
  "id": 47,
  "first_name": "Ernest",
  "last_name": "Kim",
  "email": "ekim1a@bigcartel.com",
  "country": "Mexico",
  "ip_address": "127.120.79.37"
}, {
  "id": 48,
  "first_name": "James",
  "last_name": "Wright",
  "email": "jwright1b@spiegel.de",
  "country": "Peru",
  "ip_address": "226.141.174.245"
}, {
  "id": 49,
  "first_name": "Ryan",
  "last_name": "Pierce",
  "email": "rpierce1c@infoseek.co.jp",
  "country": "Argentina",
  "ip_address": "160.126.1.245"
}, {
  "id": 50,
  "first_name": "Mark",
  "last_name": "Fernandez",
  "email": "mfernandez1d@bbc.co.uk",
  "country": "Poland",
  "ip_address": "126.89.14.21"
}, {
  "id": 51,
  "first_name": "Jacqueline",
  "last_name": "Hansen",
  "email": "jhansen1e@odnoklassniki.ru",
  "country": "Philippines",
  "ip_address": "226.116.186.81"
}, {
  "id": 52,
  "first_name": "Jack",
  "last_name": "Larson",
  "email": "jlarson1f@usatoday.com",
  "country": "Venezuela",
  "ip_address": "123.223.165.178"
}, {
  "id": 53,
  "first_name": "Ann",
  "last_name": "Howell",
  "email": "ahowell1g@arstechnica.com",
  "country": "Kazakhstan",
  "ip_address": "65.195.132.209"
}, {
  "id": 54,
  "first_name": "Stephanie",
  "last_name": "Cunningham",
  "email": "scunningham1h@dot.gov",
  "country": "United States",
  "ip_address": "66.56.254.168"
}, {
  "id": 55,
  "first_name": "Brian",
  "last_name": "Stevens",
  "email": "bstevens1i@infoseek.co.jp",
  "country": "Indonesia",
  "ip_address": "249.253.250.69"
}, {
  "id": 56,
  "first_name": "Craig",
  "last_name": "Sanchez",
  "email": "csanchez1j@myspace.com",
  "country": "Guam",
  "ip_address": "91.163.151.107"
}, {
  "id": 57,
  "first_name": "Heather",
  "last_name": "Castillo",
  "email": "hcastillo1k@hatena.ne.jp",
  "country": "Nigeria",
  "ip_address": "73.119.47.169"
}, {
  "id": 58,
  "first_name": "Christine",
  "last_name": "Medina",
  "email": "cmedina1l@zdnet.com",
  "country": "Argentina",
  "ip_address": "152.192.84.168"
}, {
  "id": 59,
  "first_name": "Kenneth",
  "last_name": "Tucker",
  "email": "ktucker1m@360.cn",
  "country": "Colombia",
  "ip_address": "79.216.190.19"
}, {
  "id": 60,
  "first_name": "Raymond",
  "last_name": "Richards",
  "email": "rrichards1n@gnu.org",
  "country": "Russia",
  "ip_address": "49.140.206.165"
}, {
  "id": 61,
  "first_name": "Amy",
  "last_name": "Mendoza",
  "email": "amendoza1o@ezinearticles.com",
  "country": "Indonesia",
  "ip_address": "90.202.129.135"
}, {
  "id": 62,
  "first_name": "Wayne",
  "last_name": "Elliott",
  "email": "welliott1p@sun.com",
  "country": "China",
  "ip_address": "36.192.208.226"
}, {
  "id": 63,
  "first_name": "Dennis",
  "last_name": "Perkins",
  "email": "dperkins1q@dot.gov",
  "country": "Indonesia",
  "ip_address": "123.195.132.253"
}, {
  "id": 64,
  "first_name": "Barbara",
  "last_name": "Jenkins",
  "email": "bjenkins1r@cafepress.com",
  "country": "Thailand",
  "ip_address": "104.237.133.235"
}, {
  "id": 65,
  "first_name": "Kenneth",
  "last_name": "Fields",
  "email": "kfields1s@plala.or.jp",
  "country": "China",
  "ip_address": "96.146.64.70"
}, {
  "id": 66,
  "first_name": "Scott",
  "last_name": "Jones",
  "email": "sjones1t@google.com.au",
  "country": "Indonesia",
  "ip_address": "15.205.84.126"
}, {
  "id": 67,
  "first_name": "Antonio",
  "last_name": "Henderson",
  "email": "ahenderson1u@shop-pro.jp",
  "country": "France",
  "ip_address": "219.140.185.228"
}, {
  "id": 68,
  "first_name": "Dennis",
  "last_name": "Meyer",
  "email": "dmeyer1v@patch.com",
  "country": "Portugal",
  "ip_address": "134.245.210.107"
}, {
  "id": 69,
  "first_name": "Scott",
  "last_name": "Riley",
  "email": "sriley1w@techcrunch.com",
  "country": "Poland",
  "ip_address": "89.117.86.128"
}, {
  "id": 70,
  "first_name": "Adam",
  "last_name": "Duncan",
  "email": "aduncan1x@imageshack.us",
  "country": "Macedonia",
  "ip_address": "173.144.28.182"
}, {
  "id": 71,
  "first_name": "Dorothy",
  "last_name": "Jordan",
  "email": "djordan1y@auda.org.au",
  "country": "Canada",
  "ip_address": "239.170.127.66"
}, {
  "id": 72,
  "first_name": "Johnny",
  "last_name": "Burke",
  "email": "jburke1z@springer.com",
  "country": "Philippines",
  "ip_address": "64.149.74.52"
}, {
  "id": 73,
  "first_name": "Donald",
  "last_name": "Fuller",
  "email": "dfuller20@unicef.org",
  "country": "Paraguay",
  "ip_address": "237.77.67.73"
}, {
  "id": 74,
  "first_name": "Kimberly",
  "last_name": "Thompson",
  "email": "kthompson21@wordpress.org",
  "country": "Colombia",
  "ip_address": "227.24.120.188"
}, {
  "id": 75,
  "first_name": "Fred",
  "last_name": "Griffin",
  "email": "fgriffin22@amazon.de",
  "country": "Ireland",
  "ip_address": "154.87.197.87"
}, {
  "id": 76,
  "first_name": "Irene",
  "last_name": "Warren",
  "email": "iwarren23@hhs.gov",
  "country": "Indonesia",
  "ip_address": "87.158.35.153"
}, {
  "id": 77,
  "first_name": "Carolyn",
  "last_name": "Fowler",
  "email": "cfowler24@gizmodo.com",
  "country": "Russia",
  "ip_address": "17.157.131.33"
}, {
  "id": 78,
  "first_name": "Daniel",
  "last_name": "Dean",
  "email": "ddean25@apple.com",
  "country": "Philippines",
  "ip_address": "162.117.12.194"
}, {
  "id": 79,
  "first_name": "Walter",
  "last_name": "Johnston",
  "email": "wjohnston26@mtv.com",
  "country": "China",
  "ip_address": "252.174.116.16"
}, {
  "id": 80,
  "first_name": "Jeremy",
  "last_name": "Thompson",
  "email": "jthompson27@whitehouse.gov",
  "country": "Indonesia",
  "ip_address": "212.187.46.62"
}, {
  "id": 81,
  "first_name": "Angela",
  "last_name": "Jones",
  "email": "ajones28@msn.com",
  "country": "Russia",
  "ip_address": "8.94.234.31"
}, {
  "id": 82,
  "first_name": "John",
  "last_name": "Perry",
  "email": "jperry29@ucoz.ru",
  "country": "Japan",
  "ip_address": "163.91.29.230"
}, {
  "id": 83,
  "first_name": "Joyce",
  "last_name": "Duncan",
  "email": "jduncan2a@webs.com",
  "country": "Sweden",
  "ip_address": "137.188.29.129"
}, {
  "id": 84,
  "first_name": "Fred",
  "last_name": "Parker",
  "email": "fparker2b@studiopress.com",
  "country": "Japan",
  "ip_address": "98.88.96.35"
}, {
  "id": 85,
  "first_name": "Christopher",
  "last_name": "Bennett",
  "email": "cbennett2c@dedecms.com",
  "country": "Indonesia",
  "ip_address": "83.219.219.120"
}, {
  "id": 86,
  "first_name": "Jonathan",
  "last_name": "Fowler",
  "email": "jfowler2d@freewebs.com",
  "country": "Portugal",
  "ip_address": "29.108.237.48"
}, {
  "id": 87,
  "first_name": "Robin",
  "last_name": "Lewis",
  "email": "rlewis2e@istockphoto.com",
  "country": "Madagascar",
  "ip_address": "62.126.105.59"
}, {
  "id": 88,
  "first_name": "Andrea",
  "last_name": "Ferguson",
  "email": "aferguson2f@trellian.com",
  "country": "Luxembourg",
  "ip_address": "17.189.19.25"
}, {
  "id": 89,
  "first_name": "Judith",
  "last_name": "Rogers",
  "email": "jrogers2g@skype.com",
  "country": "Serbia",
  "ip_address": "237.223.65.194"
}, {
  "id": 90,
  "first_name": "Michael",
  "last_name": "Howard",
  "email": "mhoward2h@nationalgeographic.com",
  "country": "Czech Republic",
  "ip_address": "105.192.246.66"
}, {
  "id": 91,
  "first_name": "Deborah",
  "last_name": "Myers",
  "email": "dmyers2i@nyu.edu",
  "country": "Mexico",
  "ip_address": "30.199.35.61"
}, {
  "id": 92,
  "first_name": "Roger",
  "last_name": "Little",
  "email": "rlittle2j@elpais.com",
  "country": "France",
  "ip_address": "129.49.205.200"
}, {
  "id": 93,
  "first_name": "Alan",
  "last_name": "Henderson",
  "email": "ahenderson2k@arstechnica.com",
  "country": "Portugal",
  "ip_address": "92.163.194.99"
}, {
  "id": 94,
  "first_name": "Christine",
  "last_name": "Barnes",
  "email": "cbarnes2l@businessinsider.com",
  "country": "Czech Republic",
  "ip_address": "190.147.189.194"
}, {
  "id": 95,
  "first_name": "Marie",
  "last_name": "Berry",
  "email": "mberry2m@blogs.com",
  "country": "China",
  "ip_address": "23.245.159.13"
}, {
  "id": 96,
  "first_name": "Lori",
  "last_name": "Williams",
  "email": "lwilliams2n@vimeo.com",
  "country": "China",
  "ip_address": "224.199.36.50"
}, {
  "id": 97,
  "first_name": "Patricia",
  "last_name": "Moore",
  "email": "pmoore2o@gov.uk",
  "country": "China",
  "ip_address": "216.172.176.169"
}, {
  "id": 98,
  "first_name": "Arthur",
  "last_name": "Cook",
  "email": "acook2p@cloudflare.com",
  "country": "China",
  "ip_address": "198.52.251.55"
}, {
  "id": 99,
  "first_name": "Judith",
  "last_name": "Edwards",
  "email": "jedwards2q@icio.us",
  "country": "Russia",
  "ip_address": "179.170.98.191"
}, {
  "id": 100,
  "first_name": "Diana",
  "last_name": "Butler",
  "email": "dbutler2r@wsj.com",
  "country": "China",
  "ip_address": "100.11.188.202"
}]};

  beforeEach(function (){
    
  // load the module.
  module('angularTDDSample.item');
    
  // get your service, also get $httpBackend
  // $httpBackend will be a mock, thanks to angular-mocks.js
  inject(function($httpBackend, _item_) {
      item = _item_;      
      httpBackend = $httpBackend;
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
      httpBackend.whenGET("http://www.mocky.io/v2/553399a619e528110ff765d9").respond(itemsResponse);

      //when
      item.getList().then(function(response){
        items = response.data;
      });

      httpBackend.flush();

      //then
      expect(items).toEqual(itemsResponse.data);      
      
  }));
});
