const { db } = require("../firebaseConfig");
const axios = require("axios");

exports.chat = async (req, res) => {
  const { userId, message } = req.body;
  const aiResponse = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  }, { headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` } });
  const reply = aiResponse.data.choices[0].message.content;
  await db.collection("messages").add({ userId, message, reply, timestamp: new Date() });
  res.json({ reply });
};
