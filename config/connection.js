const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3300",
    user: "root",
    password: "Greenotter4!",
    database: "burgers_db"
});

// making connection
connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;