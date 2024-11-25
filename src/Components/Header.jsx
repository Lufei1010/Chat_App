import React from 'react'
import { LogOut } from 'react-feather'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { user, handleUserLogout } = useAuth();
    const navigate = useNavigate();

    // Redirect if user is not logged in
    React.useEffect(() => {
      if (!user) {
        navigate("/login"); // Send to login page
      }
    }, [user, navigate]);

  return (
    <div id="header--wrapper">
      {user ? (
        <>
          Welcome {user.name}
          <LogOut onClick={handleUserLogout} className="header--link" />
        </>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
}

export default Header
