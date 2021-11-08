import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useContext } from "react";
import { authInstance } from "scripts/firebase";

interface iProps {
  children: React.ReactNode;
}
//@ts-ignore
const AuthContext = createContext(null);

export function AuthProvider({ children }: iProps) {
  // Local state
  const [uid, setUID] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authInstance, (authUser) => {
      if (authUser) setUID(authUser.uid);
      //@ts-ignore
      else setUID("no user");
    });
  }, []);

  return (
    //@ts-ignore
    <AuthContext.Provider value={{ uid, setUID, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
