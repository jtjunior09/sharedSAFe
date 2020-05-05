var admin = require('firebase-admin');
var db = admin.database();

var teamList = require('../public/javascripts/settings.js').teams;

exports.get_risks = function(req, res, next) {
    res.render('risks', {title: "Risk Board"});
}