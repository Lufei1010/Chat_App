import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  // const user = false;
  const user = true;
  return <>{user ? <Outlet /> : <Navigate to="/login/" />}</>;
};

export default PrivateRoute;
