var admin = require('firebase-admin');
var db = admin.database();

var teamList = require('../public/javascripts/settings.js').teams;

exports.get_dependencies = function(req, res, next) {
    res.render('dependencies', {title: "Cross Team Dependencies Board"});
}