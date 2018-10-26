var db = require("../models");
var yelpApi = require("../helper/yelpAPIcall");
// var googleMap = require("../helper/googleMaps");


module.exports = function (app) {

    // get for data containing all businesses for markers on map

    app.get("/all/marker", function (req, res) {
        db.Yelps.findAll({
            order: [['createdAt', 'DESC']]
        }).then(function (data) {
            console.log("inside 2nd get request for the array@@@@@@@@@")

            var searchArray = [];
            for (var k = 0; k < data.length; k++) {
                var newArray = [];
                newArray.push(data[k].dataValues.name);
                newArray.push(data[k].dataValues.lat);
                newArray.push(data[k].dataValues.lng);

                searchArray.push(newArray);
            }
            // console.log(searchArray);
            res.json(searchArray);
        });
    });

   
    // post request from index.handlebars with business name

    app.post("/api/search", function (req, res) {
        var truckName = req.body.truck;
        // var googleData = {};
        yelpApi(truckName).then(function (response) {
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
                lng: response.lng,
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
                res.json(result);
            });

        })
    });


};

