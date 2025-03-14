const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

// Import routes
const authRoutes = require("./routes/authRoutes"); // Ensure this path is correct
const chatRoutes = require("./routes/chatRoutes"); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost", // Change if using a remote database
  user: "your_mysql_user", // Replace with your MySQL username
  password: "your_mysql_password", // Replace with your MySQL password
  database: "chatbot_db", // Ensure this database exists
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database: chatbot_db");
  }
});

// Make the database accessible in routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

// Default route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the HUA Chat Assistant API using MySQL!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

