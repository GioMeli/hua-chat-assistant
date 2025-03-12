import React, { useState } from "react";
import axios from "axios";
const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const sendMessage = async () => {
    const res = await axios.post("http://localhost:5000/chat", { message });
    setMessages([...messages, { user: "You", text: message }, { user: "Bot", text: res.data.reply }]);
    setMessage("");
  };
  return (<div>/* Chat UI */</div>);
};
export default Chat;
