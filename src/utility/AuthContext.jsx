import React, { useState } from "react";
import { createContext } from "react";

// create context
export const Auth = createContext();

export const AuthContext = ({ children }) => {
  const [authResponse, setAuthResponse] = useState([])
  return <Auth.Provider value={authResponse, setAuthResponse}>
    {children}
    </Auth.Provider>;
};
