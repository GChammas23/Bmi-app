var express = require('express');
var router = express.Router();

const bmi = require('../services/bmi.services');

router.post("/addBmi", bmi.addBmi);
router.post("/getValues", bmi.getBmi);

module.exports = router