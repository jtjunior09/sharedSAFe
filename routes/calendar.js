var express = require('express');
var router = express.Router();

let calendar = require('../controllers/calendar.js');

/* GET workspace. */
router.get('/', calendar.get_calendar);

module.exports = router;
