var express = require('express');
var router = express.Router();

let home = require('../controllers/home.js');

/* GET home page. */
router.get('/', home.get_home);

/* POST user/team */
router.post('/', home.submit_user);

module.exports = router;
