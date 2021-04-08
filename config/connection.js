// Set up MySQL connection.
const mysql = require("mysql");
const dbConfig = require("./db.config")

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  port: process.env.PORT || 3306,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;