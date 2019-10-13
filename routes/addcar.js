var express = require('express');
var router = express.Router();
var path = require("path");
var bodyParser = require("body-parser");
router.use(bodyParser.json())

var cars = require('./scheme');

router.get('/check', function(req,res){
    res.send("Add Car working");
})

router.post('/', function (req, res) {
    var vec_no = req.body.vehicle_number;
    var vec_model = req.body.vehicle_model;
    var vec_seat_cap = req.body.vehicle_seating_capacity;
    var vec_rent = req.body.vehicle_rent_per_day;
    var vec_city=req.body.vehile_city;

    // var cars=mongoose.model("car_details",memberSchema);


    cars.find({vec_no:req.body.vehicle_number},function(err,docs){
           
        if(docs.length)
        {
           res.send("vehicle already registered");
        }
        else
        {
        var createnewcar=new cars({
            vec_no:req.body.vehicle_number,
            vec_model:req.body.vehicle_model,
            vec_city:req.body.vehicle_city,
            vec_seat_cap:req.body.vehicle_seating_capacity,
            vec_rent:req.body.vehicle_rent_per_day,
            vec_available:true
        });
        createnewcar.save(function(err,newentry){
                if(err)
                {
                    res.send("car with no" +vec_no+ "is not registered\n");
                }
                else{
                    res.send("car with no "+vec_no+" is  registered\n");
                }
        });
    }
});

});
module.exports =  { router} 
