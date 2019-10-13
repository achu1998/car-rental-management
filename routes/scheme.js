var mongoose = require('mongoose');
var memberSchema = new mongoose.Schema({
    vec_no: { type : String},
    vec_city: { type : String},
    vec_model: { type : String},
    vec_seat_cap: { type : String},
    vec_rent: { type : String},
    vec_available: { type : Boolean}
});
var cars=mongoose.model('car_detail', memberSchema);
module.exports = cars;