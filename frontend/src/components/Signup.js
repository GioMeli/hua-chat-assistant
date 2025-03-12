import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username.startsWith("it")) {
      setError("Username must start with 'it'");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", { username, email, password });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          className="w-full p-2 mb-2 border rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;

