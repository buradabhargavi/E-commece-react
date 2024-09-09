import React, { useContext } from "react";
import { LoginContext } from "../../Store/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthProtect = () => {
  const AuthCtx = useContext(LoginContext);

  if (!AuthCtx.isloggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default AuthProtect;
