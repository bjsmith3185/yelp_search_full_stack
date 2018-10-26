var db = require("../models");



module.exports = function (app) {

    // homepage - search page, index.handlebars

    app.get("/", function (req, res) {
        res.render("index", {
            msg: "This is the  NEW YELP search Page!",
            key: process.env.GOOGLE_API_KEY,
        });
    });

    // list page, list.handlebars
    app.get("/list", function (req, res) {
        db.Yelps.findAll({
           
            order: [ [ 'createdAt', 'DESC' ]]
          }).then(function (data) {
              console.log("inside /list")
            //   console.log(process.env.GOOGLE_API_KEY)
           
            res.render("list", {
                info: "Search results by list.",
                msg: "This is the list results page!",
                data: data,
            });
          });
    })


    //  map page, map.handlebars
    app.get("/map", function (req, res) {
        db.Yelps.findAll({
           
            order: [ [ 'createdAt', 'DESC' ]]
          }).then(function (data) {
              console.log("inside /map")
            //   console.log(data[0].dataValues.lat);
            //   console.log(data[0].dataValues.long);
            //   console.log(process.env.GOOGLE_API_KEY)
           
            res.render("map", {
                key: process.env.GOOGLE_API_KEY,
                lat: data[0].dataValues.lat,
                lng: data[0].dataValues.lng,
                info: "Each pin is a search result.",
                msg: "This is the map results page!",
                data: data,
            });
          });
    })



    // combo page, combo.handlbars
    app.get("/combo", function (req, res) {
        db.Yelps.findAll({
           
            order: [ [ 'createdAt', 'DESC' ]]
          }).then(function (data) {
              console.log("inside /combo")
                      
            res.render("combo", {
                key: process.env.GOOGLE_API_KEY,
                lat: data[0].dataValues.lat,
                lng: data[0].dataValues.lng,
                mapTitle: "Map Search Results",
                listTitle: "List Search Results",
                msg: "Showing the map with list!",
                data: data,
            });
          });
    })



};





// to show only the last search

//  //  map page, map.handlebars
//  app.get("/map", function (req, res) {
//     db.Yelps.findAll({
//         limit: 1,
//         where: {
//           //your where conditions, or without them if you need ANY entry
//         },
//         order: [ [ 'createdAt', 'DESC' ]]
//       }).then(function (data) {
//           console.log("inside /map")
//           console.log(data[0].dataValues.lat);
//           console.log(data[0].dataValues.long);
//           console.log(process.env.GOOGLE_API_KEY)
       
//         res.render("map", {
//             key: process.env.GOOGLE_API_KEY,
//             lat: data[0].dataValues.lat,
//             long: data[0].dataValues.long,
//             info: "Each pin is a search result.",
//             msg: "This is the map results page!",
//             data: data,
//         });
//       });
// })

