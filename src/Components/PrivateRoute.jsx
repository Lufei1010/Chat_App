import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../utils/AuthContext'

const PrivateRoute = () => {
  const {user} = useAuth()
  // const user = false;
  // const user = true;
  return <>
      {user ? <Outlet /> : <Navigate to="/login/" />}
  </>;
};

export default PrivateRoute;
