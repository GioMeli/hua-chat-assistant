const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); // Ensure this path is correct
const chatRoutes = require("./routes/chatRoutes"); // Ensure this path is correct
const firebaseConfig = require("./firebaseConfig");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

// Default route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the HUA Chat Assistant API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
