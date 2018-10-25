// alert("yelp_search.js")

// var googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyBK01OUjHgHsTceov0kskMjApl9UpP96cY'
// });


// googleMapsClient.geocode({
//   address: '1600 Amphitheatre Parkway, Mountain View, CA'
// }, function(err, response) {
//   if (!err) {
//     console.log("this is google maps")
//     console.log(response.json.results);
//   }
// });




$.get("/all", function (data) {

  if (data.length !== 0) {
    // console.log(data);
    return;


  } else {
    for (var i = 0; i < data.length; i++) {

      putOnPage(data[i])
    }
  }

});

$("#submit").on("click", function (e) {
  e.preventDefault();
  var data = {
    truck: $("#foodTruckName").val().trim()
  };



  $.ajax("/api/truck", {
    type: "post",
    data: data
  }).then(function (response, err) {
    console.log("RESPONSE.yelp~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log(response);
    
    initMap(response.lat, response.long)

    // var map = $("#map");
    // map = new google.maps.Map(document.getElementById("map"), response.map);
    // map = response.maps[0];

    putOnPage(response);

  }, err => {
    console.log("ERROR~~~~~~~~~~~~~~~~~~~");
    console.log(err);

  }

  );

  function initMap(lat, long) {
    // The location of Uluru
    var center = {lat: lat, lng: long};
    // The map, centered at center
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: center});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: center, map: map});
  }


  function putOnPage(input) {
    var row = $("<div>");
    // row.addClass("chirp");

    row.append("<div>" + input.name + "</div>");
    row.append("<img class='business-image'src="+ input.image_url + ">");
    row.append("<div>" + input.category + "</div>");
    row.append("<span>" + "Overall Rating: " + input.rating + " Stars" +  "</span>");
    row.append("<span>" + "   total number of reviews: " + input.reviewCount + "</span>");
    row.append("<div>" + "Price: " +  input.price + "</div>");
    row.append("<div>"+ " Business Phone: " + input.phone + "</div>");

    $("#results").prepend(row);

    // google maps 



  }



})

















// var newScript = $(`<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBK01OUjHgHsTceov0kskMjApl9UpP96cY
//     &callback=initMap">
//     </script>`);

//     $("#attachHere").append(newScript);
// var latA;
// var longB;
// var cityData = {};

// function initMap() {
//       // The location of Uluru
//       var city = cityData
//       // var uluru = {lat: latA, lng: longB};

//       // The map, centered at Uluru
//       var map = new google.maps.Map(
//           document.getElementById('map'), {zoom: 4, center: city});
//       // The marker, positioned at Uluru
//       var marker = new google.maps.Marker({position: city, map: map});
//     }
