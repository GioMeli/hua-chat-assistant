const { db } = require("../firebaseConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username.startsWith("it")) {
    return res.status(400).json({ error: "Username must start with 'it'" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.collection("users").add({ username, email, password: hashedPassword });
  res.json({ message: "Account created. Please sign in." });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const users = await db.collection("users").where("email", "==", email).get();
  if (users.empty) return res.status(401).json({ error: "Invalid credentials" });
  const user = users.docs[0].data();
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
  res.json({ token });
};
