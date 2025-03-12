const { db } = require("../firebaseConfig");
const axios = require("axios");

exports.sendMessage = async (req, res) => {  // Renamed from "chat" to "sendMessage"
  try {
    const { userId, message } = req.body;

    const aiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      { headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` } }
    );

    const reply = aiResponse.data.choices[0].message.content;

    await db.collection("messages").add({
      userId,
      message,
      reply,
      timestamp: new Date(),
    });

    res.json({ reply });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a function to fetch messages
exports.getMessages = async (req, res) => {
  try {
    const snapshot = await db.collection("messages").orderBy("timestamp", "desc").get();
    const messages = snapshot.docs.map(doc => doc.data());
    res.json({ messages });
  } catch (error) {
    console.error("Error in getMessages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
