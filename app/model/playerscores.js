// *********************************************************************************
// PLAYERSCORES.JS - THIS FILE CREATES A MODEL OF SCORES IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 


var playerScore = sequelize.define("playerScore", {
	id: {
		type: Sequelize.INTEGER;
		autoIncrement: true;
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING;
	},
	hole1: {
		type: Sequelize.INTEGER;
	},
	hole2: {
		type: Sequelize.INTEGER;
	},
	hole3: {
		type: Sequelize.INTEGER;
	},
	hole4: {
		type: Sequelize.INTEGER;
	},
	hole5: {
		type: Sequelize.INTEGER;
	},
	hole6: {
		type: Sequelize.INTEGER;
	},
	hole7: {
		type: Sequelize.INTEGER;
	},
	hole8: {
		type: Sequelize.INTEGER;
	},
	hole9: {
		type: Sequelize.INTEGER;
	},
	hole10: {
		type: Sequelize.INTEGER;
	},
	hole11: {
		type: Sequelize.INTEGER;
	},
	hole12: {
		type: Sequelize.INTEGER;
	},
	hole13: {
		type: Sequelize.INTEGER;
	},
	hole14: {
		type: Sequelize.INTEGER;
	},
	hole15: {
		type: Sequelize.INTEGER;
	},
	hole16: {
		type: Sequelize.INTEGER;
	},
	hole17: {
		type: Sequelize.INTEGER;
	},
	hole18: {
		type: Sequelize.INTEGER;
	},
});

playerScore.sync();

module.exports = playerScore;
