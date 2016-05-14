
var scores = require('../model/playerscores.js');

// Routes
// =============================================================


module.exports = function(app){

	app.get('/api/friends', function (req,res){
		res.sendFile('../public/index.html');
	});

	app.post('/api/round1socres', function (req,res){

		var newScoreObject= {
			name: "",
			scores: []
		}

	


}