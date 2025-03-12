class Message {
  constructor(userId, message, reply, timestamp) {
    this.userId = userId;
    this.message = message;
    this.reply = reply;
    this.timestamp = timestamp;
  }
}
module.exports = Message;
