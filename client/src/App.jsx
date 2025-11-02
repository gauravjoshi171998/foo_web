import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Sign from "./Sign";
import Home from "./Home";
import Header from "./navbar/Navbar";
import { useEffect, useState } from "react";
import UserList from "./userlist/UserList";
import ContactUs from "./contact/Contact";
import About from "./about/About";
import OurServices from "./OurServices/OurServices";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./footer/Footer";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  // 🔒 Protected Route: only accessible with token

  // Update token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" replace />;
  };

  // 🚪 Public Route: redirect to home if already logged in
  const PublicRoute = ({ children }) => {
    return token ? <Navigate to="/home" replace /> : children;
  };

  return (
    <>
      <BrowserRouter>
        {token && <Header setToken={setToken} />}
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login setToken={setToken} />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Sign />
              </PublicRoute>
            }
          />

          {/* Protected route */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userlist"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact-us"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        {token && (
          <>
            <OurServices />
            <Newsletter />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
