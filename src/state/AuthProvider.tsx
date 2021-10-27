//@ts-nocheck
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Local state
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
