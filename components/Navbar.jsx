import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token"); // or any login flag

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
        {!isAuthenticated && <li><Link to="/register">Register</Link></li>}
        {isAuthenticated && <li><Link to="/project">Add Project</Link></li>}
        {isAuthenticated && <li><button onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
