import React from "react";

export const LoginContext = React.createContext({
  Login: (data) => {},
  Logout: () => {},
  isloggedIn: false,
});
