const mongoose = require('mongoose');

const conUrl = "mongodb://localhost:27017/VehicalDB";

const connection = mongoose.connect(conUrl , (err)=>{
    if(err)
    {
        console.error("Couldn't connect to database!" + err);
    }

    console.log("Connected successfuly!");
})