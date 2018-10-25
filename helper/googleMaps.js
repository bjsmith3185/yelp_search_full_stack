
var googleMapsClient = require('@google/maps').createClient({
    key: "AIzaSyA6pItobxq0v_r7pWG5w_R36jtaVw8h520",
  });

  module.exports = function googleMap(address) {
     
    return new Promise((resolve, reject) => {

    googleMapsClient.geocode({
        // center: {lat: lat, lng: long},
        address: address
      }, function(err, response) {
        if (!err) {
            // console.log("this is google maps");
            // console.log(response.json.results);
    
        } else {
            console.log("this is not google maps");
            console.log(err);
        }
        resolve(response.json.results)
      });
     

    });

  }
  
  
  