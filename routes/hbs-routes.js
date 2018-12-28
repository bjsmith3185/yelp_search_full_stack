var db = require("../models");



module.exports = function (app) {

    // homepage - search page, index.handlebars

    app.get("/", function (req, res) {
        res.render("index", {
            msg: "Enter a restaurant to see where it is located!",
            key: process.env.GOOGLE_API_KEY,
        });
    });

    // list page, list.handlebars
    app.get("/list", function (req, res) {
        db.Yelps.findAll({

            order: [['createdAt', 'DESC']]
        }).then(function (data) {

            if (data.length === 0) {
                // console.log("array is empty")
                return;
            } else {

                res.render("list", {
                    info: "Search results by list.",
                    msg: "This is the list results page!",
                    data: data,
                });
            }
        });
    })


    //  map page, map.handlebars
    app.get("/map", function (req, res) {
        db.Yelps.findAll({

            order: [['createdAt', 'DESC']]
        }).then(function (data) {

            if (data.length === 0) {
                // console.log("array is empty")
                return;
            } else {
                res.render("map", {
                    key: process.env.GOOGLE_API_KEY,
                    lat: data[0].dataValues.lat,
                    long: data[0].dataValues.long,
                    info: "Each pin is a search result.",
                    msg: "This is the map results page!",
                    data: data,
                });
            }
        });
    })



    // combo page, combo.handlbars
    app.get("/combo", function (req, res) {
        db.Yelps.findAll({

            order: [['createdAt', 'DESC']]
        }).then(function (data) {

            if (data.length === 0) {
                // console.log("array is empty")
                return;
            } else {
                res.render("combo", {
                    key: process.env.GOOGLE_API_KEY,
                    lat: data[0].dataValues.lat,
                    long: data[0].dataValues.long,
                    mapTitle: "Map Search Results",
                    listTitle: "List Search Results",
                    msg: "Showing the map with list!",
                    data: data,
                });
            }
        });
    })
};



