//DEPENDENCIES
// =============================================================


var express = require ('express');
var bodyParser = require ('body-parser');
var connection = require ('./app/config/connection.js');
var mysql = require('mysql');
var playerScores = require('./model/playerscores.js') ;
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.





// SET UP EXPRESS APP
// =============================================================

var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//ROUTES
// =============================================================

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);



// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

// check database connection
// sequelize.authenticate().complete(function(err) {
//     if (err) {
//       console.log('Unable to connect to the database:', err);
//     } else {
//       console.log('Connection has been established successfully.');
//     }
// });