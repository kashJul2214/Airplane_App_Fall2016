(function() {

    angular
        .module('airplaneApp')
        .service('DarkskyWeather', darkskyWeather);

    darkskyWeather.$inject = ['$http', 'KeyStore'];

    function darkskyWeather($http, KeyStore) {
        var getWeather = function(lat, lon) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //03492bbdb17f9d026210ca62d1e78c9b
                    var darkskykey = keys.DARK_SKY_KEY;
                    return $http.jsonp('https://api.darksky.net/forecast/' + darkskykey + '/' +
                        lat + ',' + lon + "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };
        
        var getWeather2 =  function(lat, lon){
            return $http.jsonp('https://api.darksky.net/forecast/03492bbdb17f9d026210ca62d1e78c9b/' +
                lat + ',' + lon + "?callback=JSON_CALLBACK", {
                    jsonpCallbackParam: 'callback'
                });        
        }        

        return {
            getWeather: getWeather,
            getWeather2 : getWeather2
        };
    }
    
})();
