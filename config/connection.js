const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "527996",
    database: "burgers_db"
});

// make connection
connection.connect(function(err){
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exoport connection for ORM use.
module.exports = connection;