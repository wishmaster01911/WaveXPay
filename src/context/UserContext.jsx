import React from "react";  
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(542.75);

  const login = (phone) => setUser({ name: "Aarav", phone });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, wallet, setWallet, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
