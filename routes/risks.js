var express = require('express');
var router = express.Router();

let risks = require('../controllers/risks.js');

/* GET risks */
router.get('/', risks.get_risks);

module.exports = router;
