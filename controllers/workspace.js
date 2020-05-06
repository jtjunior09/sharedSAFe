var admin = require('firebase-admin');
var db = admin.database();

var teamList = require('../public/javascripts/settings.js').teams;
var iterations = require('../public/javascripts/settings.js').iterations;
var team = '';

exports.get_workspace = function(req, res, next) {
    team = req.query.team.charAt(0).toUpperCase() + req.query.team.slice(1);
    tickets = {}
    var ref = db.ref(team+'/'+'board');
    var handleChanges = ref.once('value', function(data) {
        dataJson = data.exportVal();

        for (i = 0; i < iterations.length; i++) {
            key = 'iter' + (i+1).toString();
            tickets[key] = dataJson[iterations[i]]['tickets'];
        }

        res.render('workspace', {team:team + " Work Space", tickets:tickets, iterations:iterations});
    });
}

exports.create_ticket = function(req, res, next) {
    console.log('create_ticket hit! Iteration:', req.query);
    data = req.query;
    rawIteration = data.iteration;
    iteration = "12-" + rawIteration[rawIteration.length-1];

    newTicket = {};
    newTicket['title'] = data.title;
    newTicket['type'] = data.ticketType;
    newTicket['link'] = data.link;
    newTicket['points'] = data.points;

    var ref = db.ref(team+'/'+'board/'+iteration+'/tickets');
    var newPushTicket = ref.push();
    newPushTicket.set(newTicket)
    newPushTicket.update({updated: Date.now()});

    res.redirect('/workspace?team='+team);
}

