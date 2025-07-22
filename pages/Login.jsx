import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(email); // simulate login
    localStorage.setItem("token", "your-mock-auth-token");
    navigate("/project");
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1620116474872-edca25baf513?w=500&auto=format&fit=crop&q=60")`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
