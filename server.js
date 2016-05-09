//DEPENDENCIES
// =============================================================


var express = require ('express');
var bodyParser = require ('body-parser');


// SET UP EXPRESS APP
// =============================================================

var app = express();
var PORT = process.enc.PORT || 8080;


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