import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Assuming login is enough to "register"
    login(email);
    navigate("/project");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-157870581071-d9b52bf80993?w=500&auto=format&fit=crop&q=60")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col space-y-4 w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-500 hover:bg-green-600 p-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;
