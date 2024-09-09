import React, { useState } from "react";
import { LoginContext } from "./LoginContext";

function LoginProvider({ children }) {
  const item = localStorage.getItem("Token");
  const [token, setToken] = useState(item);
  const Login = (token) => {
    localStorage.setItem("Token", token);
    setToken(token);
  };
  const isloggedIn = !!token;
  const Logout = () => {
    localStorage.removeItem("Token");
    setToken(null);
  };

  const ctxVal = {
    Login: Login,
    Logout: Logout,
    isloggedIn,
  };

  return (
    <LoginContext.Provider value={ctxVal}>{children}</LoginContext.Provider>
  );
}

export default LoginProvider;
