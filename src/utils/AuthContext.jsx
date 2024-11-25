import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(); //store authentication data, share authentication state across the app

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); //"true" a placeholder for testing the login user can go to homepage or redirect

  useEffect(() => {
    getUserOnLoad();
  }, []);
 // persisting user after login
  const getUserOnLoad = async () => {
    try {
      const getAccountDetails = await account.get();
      console.log("getAccountDetails", getAccountDetails);
      setUser(getAccountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleUserLogin = async (e, credentials) => {
    e.preventDefault();

        //// Clear any previous session to avoid conflicts
    try {

      await account.deleteSession("current");
      console.log("Previous session cleared.");
    } catch (error) {
      console.log("No previous session to clear or error:", error.message);
    }
    //// extra features for several user testing

    try {
      const response = await account.createEmailPasswordSession(
        credentials.email,
        credentials.password
      );
      console.log("Logged in", response);
      const getAccountDetails = await account.get();
      setUser(getAccountDetails);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserLogout = async () => {
    await account.deleteSession('current') //add await to make sure it works before next step
    setUser(null);
  }

  const contextData = {
    user, // the user state is exposed to components via here
    handleUserLogin,
    handleUserLogout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext and get user data
export const useAuth = () => {
  return useContext(AuthContext);
};
