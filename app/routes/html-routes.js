


// DEPENDENCIES
// ====================================================

var path = require('path');


//ROUTES
//=====================================================

module.exports = function(app) {

	//HOME
	app.get('/', function (req,res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/round1', function (req,res){
		res.sendFile(path.join(__dirname + '/../public/round1.html'))
	});

	app.get('/round2', function (req,res){
		res.sendFile(path.join(__dirname + '/../public/round2.html'))
	});

	app.get('/round3', function (req,res){
		res.sendFile(path.join(__dirname + '/../public/round3.html'))
	});

	app.get('/leaderboard', function (req.res){
		res.sendFile(path.join(__dirname + '/../public/leaderboard.html'))
	});
}