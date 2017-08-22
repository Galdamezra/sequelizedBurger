//make connection to the db and export and used by the OR

var mysql = require("mysql");

var connection;
console.log('process.env.JAWSDB_URL:', process.env.JAWSDB_URL);

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("using local db");
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connect as id " + connection.threadId);
});

module.exports = connection;
