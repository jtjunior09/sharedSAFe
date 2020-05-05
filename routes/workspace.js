var express = require('express');
var router = express.Router();

let workspace = require('../controllers/workspace.js');

/* GET workspace. */
router.get('/', workspace.get_workspace);
router.get('/create_ticket', workspace.create_ticket);

module.exports = router;
