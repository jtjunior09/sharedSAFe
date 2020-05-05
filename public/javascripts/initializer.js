var settings = require('./settings.js')
var ticket = require('../objects/ticket.json');

var admin = require('firebase-admin');
var db = admin.database();

exports.init = function() {
    teamList = settings.teams;
    iterationsList = settings.iterations

    for (i = 0; i < teamList.length; i++) {
        var ref = db.ref(teamList[i]+'/'+'board');
        for (j = 0; j <  iterationsList.length; j++) {
            ref.child(iterationsList[j]).update({created:true, tickets:[]});
        }       
    }
}