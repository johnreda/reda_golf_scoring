// *********************************************************************************
// PLAYERSCORES.JS - THIS FILE CREATES A MODEL OF SCORES IN DB
// *********************************************************************************

// Dependency

// require the sequelize npm app
var Sequelize = require("sequelize"); 

// require the connection to the db
var sequelize = require("../config/connection.js"); 

// "classes" model that matches up with DB
var playerRound1 = sequelize.define("playerRound1", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	hole1: {
		type: Sequelize.INTEGER
	},
	hole2: {
		type: Sequelize.INTEGER
	},
	hole3: {
		type: Sequelize.INTEGER
	},
	hole4: {
		type: Sequelize.INTEGER
	},
	hole5: {
		type: Sequelize.INTEGER
	},
	hole6: {
		type: Sequelize.INTEGER
	},
	hole7: {
		type: Sequelize.INTEGER
	},
	hole8: {
		type: Sequelize.INTEGER
	},
	hole9: {
		type: Sequelize.INTEGER
	},
	hole10: {
		type: Sequelize.INTEGER
	},
	hole11: {
		type: Sequelize.INTEGER
	},
	hole12: {
		type: Sequelize.INTEGER
	},
	hole13: {
		type: Sequelize.INTEGER
	},
	hole14: {
		type: Sequelize.INTEGER
	},
	hole15: {
		type: Sequelize.INTEGER
	},
	hole16: {
		type: Sequelize.INTEGER
	},
	hole17: {
		type: Sequelize.INTEGER
	},
	hole18: {
		type: Sequelize.INTEGER
	},
	grossScore: {
		type: Sequelize.INTEGER
	},
	netScore: {
		type: Sequelize.INTEGER
	}
});

// Syncs with DB
playerRound1.sync({}).then(function () {
  // Table created
  console.log('player scores table done syncing')
});

// Makes the classes Model available for other files (will also create a table)
module.exports = playerRound1;

