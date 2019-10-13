var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
let jwt = require('jsonwebtoken');
mongoose.connect("mongodb://localhost:27017/car_management");
var path = require("path");
var bodyParser = require("body-parser");
router.use(bodyParser.json())
var cars = require('./scheme');


router.get('/', function (req, res) {


    cars.find({ vec_available: true, vec_city: req.body.vehicle_city }, function (err, docs) {
        if (docs.length) {
            
            var all_records="";
            for (var i = 0; i < docs.length; i++) {
                
                all_records+="CAR_NO :" + docs[i]['vec_no']+ " \nCAR_MODEL :" + docs[i]['vec_model'] + " \nCAR_SEAT_AVAILABILITY :" + docs[i]["vec_seat_cap"] + " \nRENT_PER_DAY: " + docs[i]["vec_rent"] + '\n' + "TO BOOK THIS CAR GO TO :http://localhost:3001/routes/" + docs[i]['vec_no'] + "\n";
            }
            res.send(all_records);
        }
        else {
            res.send("No available vechiles\n");

        }
    });

});

module.exports = router;

