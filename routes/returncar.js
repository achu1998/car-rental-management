var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
let jwt = require('jsonwebtoken');
mongoose.connect("mongodb://localhost:27017/car_management");
var path = require("path");
var bodyParser = require("body-parser");
router.use(bodyParser.json())


var cars = require('./scheme');


router.get('/:vehicle_no', function (req, res) {
    var book_vehicle_no = req.params['vehicle_no'];
    
    //var cars = mongoose.model("car_details", memberSchema);
    cars.find({ vec_available:false, vec_no: book_vehicle_no }, function (err, docs) {
        if (docs.length) {

            cars.findOneAndUpdate({ vec_no: book_vehicle_no }, { $set: { vec_available: true } },function(err,docs){
                if(err)
                {
                    console.log("Error in updating availability");
                }
            });
            res.send("Vehicle no: " + book_vehicle_no + " returned Successfully\n");
        }
        else {
            res.send("No vehicle with this number is available\n");

        }
    });

});
module.exports = router;

