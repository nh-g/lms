//@ts-nocheck
import { createContext, useReducer, useContext } from "react";
//Project files
import usersReducer from "./usersReducer";

const UsersContext = createContext(null);

export function UsersProvider({ children }) {
  // Local state
  const [users, dispatchUsers] = useReducer(usersReducer, []);

  return (
    <UsersContext.Provider value={{ users, dispatchUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
