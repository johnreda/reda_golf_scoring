// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "",
        database: "redascoring"
    },

    jawsDB: {
        port: 3306,
        host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vkrp5ow0gipi38ay',
        password: "w00bqn6w3yd0m1cc",
        database: "lghowl35ljxl5vao" 
    }
}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.localhost;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;