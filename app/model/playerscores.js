// *********************************************************************************
// PLAYERSCORES.JS - THIS FILE CREATES A MODEL OF SCORES IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

var sequelize = new Sequelize('redagolfscoring', 'root', '', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate().complete(function (err) {
 if (err) {
    console.log('There is connection in ERROR');
 } else {
    console.log('Connection has been established successfully');
 }
});

