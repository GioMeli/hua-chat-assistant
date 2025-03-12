const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); // Ensure this path is correct
const chatRoutes = require("./routes/chatRoutes"); // Ensure this path is correct
const firebaseConfig = require("./firebaseConfig");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
