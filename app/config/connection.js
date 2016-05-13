


// CONNECTION TO DATABASE
// ======================================================

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: "",
    database: "redascoring"
});

connection.connect(function(err){
	if (err){
		console.error('error connecting: ' + err.stack);
		return;
	}
		console.log('connected as ID: ' + connection.threadId);
})

module.exports = connection;




