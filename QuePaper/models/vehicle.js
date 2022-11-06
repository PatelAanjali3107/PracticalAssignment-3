const { default: mongoose } = require("mongoose");
const dbCon = require("../config/db");

const vehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        require: true
    },
    catName:{
        type: String,
        require:true
    },
    picture:{
        type:String
    },
    price:{
        type: Number,
        require: true
    },
    depriciation:{
        type:Number,
    },
    year:{
        type:Number,
        require:true
    },
    totalPrice: {
        type:Number
    }
});

const vehicleModel = mongoose.model("Vehicle",vehicleSchema);
module.exports = vehicleModel;