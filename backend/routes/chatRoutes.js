const express = require("express");
const db = require("../db");

const router = express.Router();

// Save Message
router.post("/send", (req, res) => {
  const { user_id, message, response } = req.body;

  db.query(
    "INSERT INTO messages (user_id, message, response) VALUES (?, ?, ?)",
    [user_id, message, response],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error saving message" });
      }
      res.json({ message: "Message saved successfully!" });
    }
  );
});

// Get User Messages
router.get("/messages/:user_id", (req, res) => {
  const { user_id } = req.params;

  db.query("SELECT * FROM messages WHERE user_id = ?", [user_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching messages" });
    }
    res.json(results);
  });
});

module.exports = router;

