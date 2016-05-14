
var PlayerRound1 = require('../model/PlayerRound1.js');

// Routes
// =============================================================


module.exports = function(app){

	app.get('/api/friends', function (req,res){
		res.sendFile('../public/index.html');
	});

	app.post('/api/round1scores', function (req,res){

		console.log("POSTED");

		var object = req.body;

		console.log(object);

		PlayerRound1.create({
			name: object.name,
			hole1: object.scores[0],
			hole2: object.scores[1],
			hole3: object.scores[2],
			hole4: object.scores[3],
			hole5: object.scores[4],
			hole6: object.scores[5],
			hole7: object.scores[6],
			hole8: object.scores[7],
			hole9: object.scores[8],
			hole10: object.scores[9],
			hole11: object.scores[10],
			hole12: object.scores[11],
			hole13: object.scores[12],
			hole14: object.scores[13],
			hole15: object.scores[14],
			hole16: object.scores[15],
			hole17: object.scores[16],
			hole18: object.scores[17],
			grossScore: object.total,
			netScore: 0,
		});

	});
}