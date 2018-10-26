
var fetchUrl = require("fetch").fetchUrl;


module.exports = function yelpApi(input) {
    var options = {
        headers: {
            "authorization": process.env.YELP_API_TOKEN
        }
    }
    return new Promise((resolve, reject) => {
            // yelp api call
            fetchUrl(`https://api.yelp.com/v3/businesses/search?term=${input}&location=charlotte_nc`, options, function (error, meta, body) {
                var obj = JSON.parse(body);
                var result = obj.businesses[0];
                // console.log(result)
                // console.log(result.review_count);
                var id = result.id; // used to get the reviews from the yelp in the API call below for business reviews
                var company = result.name;
                var foodPicture = result.image_url;
                var category = result.categories[0].title;
                var overallRating = result.rating;
                var reviewCount = result.review_count;  // added this line
                var price = result.price;
                var phone = result.display_phone;
                var closed = result.is_closed;
                var url = result.url;
                var lat = result.coordinates.latitude;
                var long = result.coordinates.longitude;
                var street = result.location.address1;
                var city = result.location.city;
                var zip = result.location.zip_code;
                var state = result.location.state;

    
                fetchUrl(`https://api.yelp.com/v3/businesses/${id}/reviews`, options, function (error, meta, body) {
                    var obj = JSON.parse(body);
    
                    var review_1_text = obj.reviews[0].text;
                    var review_1_rating = obj.reviews[0].rating;
                    var review_1_time = obj.reviews[0].time_created;
                    var review_1_author = obj.reviews[0].user.name;
    
                    var review_2_text = obj.reviews[1].text;
                    var review_2_rating = obj.reviews[1].rating;
                    var review_2_time = obj.reviews[1].time_created;
                    var review_2_author = obj.reviews[1].user.name;
    
                    var review_3_text = obj.reviews[2].text;
                    var review_3_rating = obj.reviews[2].rating;
                    var review_3_time = obj.reviews[2].time_created;
                    var review_3_author = obj.reviews[2].user.name;
    
    
        //             console.log(`
    
        //     yelpID: ${id},
        //     company name: ${company},
        //     food pic: ${foodPicture},
        //     category: ${category},
        //     overall rating: ${overallRating},
        //     review count: ${reviewCount},
        //     price: ${price},
        //     phone: ${phone},

        //     closed: ${closed},
        //     url: ${url},
        //     lat: ${lat},
        //     long: ${long},
        //     street: ${street},
        //     city: ${city},
        //     zip: ${zip},
        //     state: ${state},
    
        //     REVIEW NUMBER 1.
        //         REVIEW: ${review_1_text}
        //         RATING BY USER: ${review_1_rating}
        //         TIME: ${review_1_time}
        //         USER INFO: ${review_1_author}
    
        //     REVIEW NUMBER 2.
        //         REVIEW: ${review_2_text}
        //         RATING BY USER: ${review_2_rating}
        //         TIME: ${review_2_time}
        //         USER INFO: ${review_2_author}
    
        //     REVIEW NUMBER 3.
        //         REVIEW: ${review_3_text}
        //         RATING BY USER: ${review_3_rating}
        //         TIME: ${review_3_time}
        //         USER INFO: ${review_3_author}
    
        //   `)
    
                // objects with API results exported to yelp-api-routes.js
                 yelpTruckResult = {
    
                        yelpID: id,
                        name: company,
                        image_url: foodPicture,
                        category: category,
                        rating:overallRating,
                        reviewCount: reviewCount, // added this line
                        price: price,
                        phone: phone,
                        closed: closed,
                        url: url,
                        lat: lat,
                        long: long,
                        street: street,
                        city: city,
                        zip: zip,
                        state, state,
                    
                        review_1_text : review_1_text,
                        review_1_rating :  review_1_rating,
                        review_1_time : review_1_time,
                        review_1_author : review_1_author,
                    
                        review_2_text : review_2_text,
                        review_2_rating :  review_2_rating,
                        review_2_time : review_2_time,
                        review_2_author : review_2_author,
                    
                        review_3_text : review_3_text,
                        review_3_rating :  review_3_rating,
                        review_3_time : review_3_time,
                        review_3_author : review_3_author,
                    }
// try to call the google maps api from here







                    resolve(yelpTruckResult);
                });
            });
    });
};
