import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("devconnectUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email) => {
    setUser({ email });
    localStorage.setItem("devconnectUser", JSON.stringify({ email }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("devconnectUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
