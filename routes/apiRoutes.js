var db = require("../models");
var yelpApi = require("../helper/yelpAPIcall")
var googleMap = require("../helper/googleMaps");

module.exports = function (app) {

  app.get("/all", function (req, res) {
    db.Yelps.findAll({
      order: [
        ['id', 'DESC'],

      ],
    }).then(function (data) {
      // var data = {
      //   data: results
      // }
      // console.log("here")
      // console.log(data)
      res.render("yelp_search", {
        key: process.env.GOOGLE_API_KEY,
        data: data
      })
      res.json(data);
    });
  })


app.post("/api/truck", function (req, res) {
  var truckName = req.body.truck;
  var googleData = {};
  yelpApi(truckName).then(function (response) {
    res.json(response);
    console.log("yelp api");
    console.log(response);
  
  })
});
 







};



// below is the post request using npm @google/map, didnt work
// app.post("/api/truck", function (req, res) {
//   var truckName = req.body.truck;
//   var googleData = {};
//   yelpApi(truckName).then(function (response) {
//     // res.json(response);
//     // console.log("yelp api");
//     // console.log(response);
//     var address = `"${response.street}, ${response.city}, ${response.state}"`;

//     googleData.yelp = response;
//     googleMap(address).then(function (data) {
//       // console.log("google maps api");
//       // console.log(data);
//       googleData.maps = data;

//       console.log("googleData")
//       console.log(googleData);
//       res.json(googleData);
//     })
//     // console.log("googleData")
//     // console.log(googleData);
//   })
// });
//============================================================



// below is the code before removing the database push


// app.post("/api/truck", function (req, res) {
//   var truckName = req.body.truck;
//   var googleData = {};
//   yelpApi(truckName).then(function (response) {
//     // res.json(response);

//     db.Yelps.create({
//       yelpID: response.yelpID,
//       name: response.name,
//       image_url: response.image_url,
//       category: response.category,
//       rating: response.rating,
//       reviewCount: response.reviewCount,
//       price: response.price,
//       phone: response.phone,

//       closed: response.closed,
//       url: response.url,
//       lat: response.lat,
//       long: response.long,
//       street: response.street,
//       city: response.city,
//       zip: response.zip,
//       state: response.state,

//       review_1_text: response.review_1_text,
//       review_1_rating: response.review_1_rating,
//       review_1_time: response.review_1_time,
//       review_1_author: response.review_1_author,

//       review_2_text: response.review_2_text,
//       review_2_rating: response.review_2_rating,
//       review_2_time: response.review_2_time,
//       review_2_author: response.review_2_author,

//       review_3_text: response.review_3_text,
//       review_3_rating: response.review_3_rating,
//       review_3_time: response.review_3_time,
//       review_3_author: response.review_3_author,
//     }).then(function (result) {
//       console.log("saved to database")
//       // console.log(result.lat)
//       // console.log(result.long)
//       var address = `"${result.street}, ${result.city}, ${result.state}"`;
//       // console.log(address);
//       googleMap(address).then(function(data){
//         // console.log("inside googlemap api return")
//         // console.log(data);

//         googleData = data;

//       })

//       var doubleResult = {

//         googleBack: googleData,
//         yelpBack: result
//       }

//       console.log("this is the big obj")
//       console.log(doubleResult);

//       // var data = {
//       //   data: result
//       // }
//       // console.log(data)
//     res.json(doubleResult)
//     });
//   })
// });

//===============================================================


























// app.post("/api/truck", function(req, res) {
//   console.log("server-side")
//   console.log(req.body)
//   var truckName = req.body.truck;
//   console.log(truckName)
//   db.businessNames.create({name: truckName}, function(result) {
//   //   // Send back the ID of the new quote

//   });



//   res.json(truckName);
// });
