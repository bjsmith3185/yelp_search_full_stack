




// $.get("/result", function (data) {
//     console.log("inside the get request for /result");
//     console.log(data)
  
//   });

  // $.get("/all/marker", function (data) {
  //   console.log("inside the get request for /all/marker");
 
  //   console.log(data)
  
  // });


  
  $("#submit").on("click", function (e) {
    e.preventDefault();

    var data = {
      truck: $("#foodTruckName").val().trim()
    };
  
  
  
    $.ajax("/api/search", {
      type: "post",
      data: data
    }).then(function (data, err) {
      console.log("sent to database, re routed to /combo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
      // console.log(data);

      // initMap(response.lat, response.long)
      location.assign("/combo");
  
      
      
  
      // var map = $("#map");
      // map = new google.maps.Map(document.getElementById("map"), response.map);
      // map = response.maps[0];
  
    //   putOnPage(response);
  
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  