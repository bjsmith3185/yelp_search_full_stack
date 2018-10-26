

  
  $("#submit").on("click", function (e) {
    e.preventDefault();

    var data = {
      truck: $("#userInput").val().trim()
    };
    
  
    $.ajax("/api/search", {
      type: "post",
      data: data
    }).then(function (data, err) {
      console.log("sent to database, re routed to /combo")

      location.assign("/combo");

  
    }, err => {
      console.log("ERROR~~~~~~~~~~~~~~~~~~~");
      console.log(err);
  
    });

  })
   