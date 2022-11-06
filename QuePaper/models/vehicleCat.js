const { default: mongoose } = require("mongoose");
const dbCon = require("../config/db");

const vehicleCatSchema = new mongoose.Schema({
    c_id: {
        type: Number,
        unique: true,
        require: true
    },
    catName: {
        type: String,
        require: true
    }
});

const vehicleCatModel = mongoose.model("VehicleCat", vehicleCatSchema);
module.exports = vehicleCatModel;