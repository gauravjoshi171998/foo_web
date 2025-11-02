import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setToken(res.data.token); // ✅ update App state
          navigate("/home", { replace: true });
        } else {
          console.log("password is incorrect");
        }
      })
      .catch((err) => console.log("❌ Error:", err));
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card shadow-lg rounded-4 d-flex overflow-hidden">
        {/* Left Side (Form) */}
        <div className="login-form p-5 bg-white flex-fill">
          <h3 className="text-center mb-3 fw-bold">LOGIN</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  ></i>
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login Now
            </button>

            <p className="text-center text-muted mb-2">Login with Others</p>

            <button className="btn btn-outline-danger w-100 mb-2">
              <i className="bi bi-google me-2"></i> Login with Google
            </button>
            <button className="btn btn-outline-primary w-100 mb-3">
              <i className="bi bi-facebook me-2"></i> Login with Facebook
            </button>

            <div className="text-center">
              <p className="mb-0">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary fw-semibold">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side (Image) */}
        <div className="login-image flex-fill d-none d-md-flex align-items-center justify-content-center">
          <img src="/login.png" alt="Login visual" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Login;
