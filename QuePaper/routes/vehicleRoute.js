const express = require('express');
const router = express.Router();
const multer = require("multer");
const vehicle = require("../models/vehicle");

var myFile;
var uploadFile;

const options = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage: options,
    fileFilter: function (req, res, cb) {
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(res.mimetype);
        var extname = filetypes.test(path.extname(res.originalname).toLocaleLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error");
    }
});

 router.get('/',(req,res) => {
    vehicle.find((err,data) => {
        if(err)
            throw err;
        res.render('InsertData',{data: data});
    });
});

router.get('/DisplayData',(req,res) => {
    vehicle.find((err,data) => {
        if(err)
            throw err;
        res.render('DisplayData',{data: data});
    });
});


 router.post('/GetData', upload.single('myFile'), (req,res) => {

    if(req.body.insert == 'upload'){
        myFile = req.file.filename;
        res.send(myFile + "File uploaded successfully :)");
    }
    else if(req.body.insert == 'insert')
    {
        var insert_data = new vehicle.newVehicleData(
        {
            brand: req.body.brand,
            catName: req.body.cat,
            picture: myfilename,
            price: req.body.price,
            depreciation: req.body.dep,
            year: req.body.years,
            totalPrice: req.body.tprice
        });

        addData.save((err,data) => {
            if(err)
                throw err;
            res.send("Data inserted successfully");
        })
    }
});

module.exports = router;