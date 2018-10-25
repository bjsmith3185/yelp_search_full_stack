var db = require("../models");
var yelpApi = require("../helper/yelpAPIcall");
var googleMap = require("../helper/googleMaps");


module.exports = function (app) {

// get for data containing all businesses for markers on map

    app.get("/all/marker", function (req, res) {
        db.Yelps.findAll({
            order: [ [ 'createdAt', 'DESC' ]]
          }).then(function (data) {
              console.log("inside 2nd get request for the array@@@@@@@@@")
            //   console.log(data);
            //   console.log(data[0].dataValues.lat);
            //   console.log(data[0].dataValues.long);
            //   console.log(process.env.GOOGLE_API_KEY)


              var searchArray = [];
              for (var k = 0; k<data.length; k++) {
                  var newArray = [];
                    newArray.push(data[k].dataValues.name);
                    newArray.push(data[k].dataValues.lat);
                    newArray.push(data[k].dataValues.long);
                    
                     
                  searchArray.push(newArray);
              }
              console.log(searchArray);
           
           res.json(searchArray);
          });
    });

    // post from index to 

    // app.get("/all", function (req, res) {
    //     db.Yelps.findAll({
    //       order: [
    //         ['id', 'DESC'],
    
    //       ],
    //     }).then(function (data) {
    //       // var data = {
    //       //   data: results
    //       // }
    //       // console.log("here")
    //       // console.log(data)
    //       res.render("yelp_search", {
    //         key: process.env.GOOGLE_API_KEY,
    //         data: data
    //       })
    //       res.json(data);
    //     });
    //   })
    
       // post from index to /api/search
    
    app.post("/api/search", function (req, res) {
      var truckName = req.body.truck;
      var googleData = {};
      yelpApi(truckName).then(function (response) {
        res.json(response);
        console.log("yelp api");
        console.log(response);
      
      })
    });

};

