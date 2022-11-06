const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');
const vehicleModel = require("./models/vehicle");
const catModel = require("./models/vehicleCat");
const router = require('./routes/vehicleRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('uploads'));
app.use('/vehicle',router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))