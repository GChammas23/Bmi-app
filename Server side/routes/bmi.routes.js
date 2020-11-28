var express = require('express');
var router = express.Router();

const bmi = require('../services/bmi.services');

router.post("/addBmi", bmi.addBmi)

module.exports = router