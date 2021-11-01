// NPM packages
import React, { createContext, useContext, useState } from "react";

//Project files
import iUser from "types/iUser";

interface iProps {
  children: React.ReactNode;
}

const UsersContext = createContext(null)

export function UserProvider({ children }: iProps) {
  //@ts-ignore
  const [user, setUser] = useState<iUser>({});

  console.log("UserProvider", user)

  return (
    //@ts-ignore
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUser() {
  return useContext(UsersContext);
}
