import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../../Store/LoginContext";
const AuthLogin = () => {
  const AuthCtx = useContext(LoginContext);

  if (AuthCtx.isloggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default AuthLogin;
