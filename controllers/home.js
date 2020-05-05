var admin = require('firebase-admin');
var db = admin.database();


var teamList = require('../public/javascripts/settings.js').teams;

exports.get_home = function(req, res, next) {
    res.render('home', {title: 'Innovation App', teams: teamList });
}

exports.submit_user = function(req, res, next) {
    console.log("User: ", req.body.user, ". Team: ", req.body.team);
    var ref = db.ref("users/" + req.body.user);
    ref.push({name:req.body.user, team:req.body.team});
    res.redirect('/workspace?team=' + req.body.team);
}