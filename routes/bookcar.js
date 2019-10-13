var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
let jwt = require('jsonwebtoken');
var path = require("path");
var bodyParser = require("body-parser");
router.use(bodyParser.json())


var cars = require('./scheme');


router.get('/:vehicle_no', function (req, res) {
    
    var book_vehicle_no = req.params['vehicle_no'];
  
    //var cars = mongoose.model("car_details", memberSchema);
    cars.find({ vec_available: true, vec_no: book_vehicle_no }, function (err, docs) {
       
        if (docs.length) {

            cars.findOneAndUpdate({ vec_no: book_vehicle_no }, { $set: { vec_available: false } },function(err,docs){
                if(err)
                {
                    console.log("Error in updating availability");
                }
            });
            res.send("Vechile no: " + book_vehicle_no + " booked Successfully\n");
        }
        else {
            res.send("No vehicle with this number is available\n");

        }
    });

});
module.exports = router;
