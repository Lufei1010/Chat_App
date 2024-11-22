import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Room from "./pages/Room";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./utils/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Room />} />
          </Route>
          
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
