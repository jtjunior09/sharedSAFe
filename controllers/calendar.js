var admin = require('firebase-admin');
var db = admin.database();

var teamList = require('../public/javascripts/settings.js').teams;

exports.get_calendar = function(req, res, next) {
    res.render('calendar', {team:"Calendar Space"});
}

