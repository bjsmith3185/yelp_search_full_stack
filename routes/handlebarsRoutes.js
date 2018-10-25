
var db = require("../models");
var yelpApi = require("../helper/yelpAPIcall")


module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.render("index", {
            msg: "This is the  NEW YELP search Page!",
            key: process.env.GOOGLE_API_KEY,
        });
    });


    // app.get("/result", function (req, res) {
    //     db.Yelps.findAll({
    //         order: [
    //           ['id', 'DESC'],
      
    //         ],
    //       }).then(function (data) {
    //           console.log("inside /result")
    //           console.log(data);
           
    //         res.render("results", {
    //             info: "hello world",
    //             msg: "This is the results page!",
    //             data: data,
    //         });
    //       });
    // })


    app.get("/result", function (req, res) {
        db.Yelps.findAll({
            limit: 1,
            where: {
              //your where conditions, or without them if you need ANY entry
            },
            order: [ [ 'createdAt', 'DESC' ]]
          }).then(function (data) {
              console.log("inside /result")
              console.log(data[0].dataValues.lat);
              console.log(data[0].dataValues.long);
              console.log(process.env.GOOGLE_API_KEY)
           
            res.render("results", {
                key: process.env.GOOGLE_API_KEY,
                lat: data[0].dataValues.lat,
                long: data[0].dataValues.long,
                info: "The last search",
                msg: "This is the results page!",
                data: data,
            });
          });
    })


    app.get("/all", function (req, res) {
        db.Yelps.findAll({
            order: [ [ 'createdAt', 'DESC' ]]
          }).then(function (data) {
              console.log("inside /result!!!!!!!!!!!!!!!")
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
           
            res.render("multiple_results", {
                searches: searchArray,
                key: process.env.GOOGLE_API_KEY,
                lat: data[0].dataValues.lat,
                long: data[0].dataValues.long,
                info: "The last search",
                msg: "This is the results page!",
                data: data,
            });
          });
    });



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
   



    app.post("/api/truck", function (req, res) {
        var truckName = req.body.truck;
        var googleData = {};
        yelpApi(truckName).then(function (response) {
              res.json(response);

              db.Yelps.create({
                yelpID: response.yelpID,
                name: response.name,
                image_url: response.image_url,
                category: response.category,
                rating: response.rating,
                reviewCount: response.reviewCount,
                price: response.price,
                phone: response.phone,
          
                closed: response.closed,
                url: response.url,
                lat: response.lat,
                long: response.long,
                street: response.street,
                city: response.city,
                zip: response.zip,
                state: response.state,
          
                review_1_text: response.review_1_text,
                review_1_rating: response.review_1_rating,
                review_1_time: response.review_1_time,
                review_1_author: response.review_1_author,
          
                review_2_text: response.review_2_text,
                review_2_rating: response.review_2_rating,
                review_2_time: response.review_2_time,
                review_2_author: response.review_2_author,
          
                review_3_text: response.review_3_text,
                review_3_rating: response.review_3_rating,
                review_3_time: response.review_3_time,
                review_3_author: response.review_3_author,
              }).then(function (result) {
                console.log("saved to database")
              
                // var address = `"${result.street}, ${result.city}, ${result.state}"`;
                // console.log(address);
                
                // res.json(result)
               
          
                
              });
       


        })

    });


};