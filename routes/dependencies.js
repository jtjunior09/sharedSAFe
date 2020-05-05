var express = require('express');
var router = express.Router();

let dependencies = require('../controllers/dependencies.js');

/* GET dependencies */
router.get('/', dependencies.get_dependencies);

module.exports = router;