const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",     // Change to your MySQL host if necessary
  user: "root",          // Change to your MySQL username
  password: "",          // Change to your MySQL password
  database: "chatbot_db" // The name of your database
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

module.exports = db;
