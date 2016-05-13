// *********************************************************************************
// PLAYERSCORES.JS - THIS FILE CREATES A MODEL OF SCORES IN DB
// *********************************************************************************

// Dependency

// require the sequelize npm app
var Sequelize = require("sequelize"); 

// require the connection to the db
var sequelize = require("../config/connection.js"); 

// "classes" model that matches up with DB
var playerScores = sequelize.define("playerSCores", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	holeScores: {
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
playerScores.sync({}).then(function () {
  // Table created
  console.log('classes table done syncing')
});

// Makes the classes Model available for other files (will also create a table)
module.exports = playerScores;

