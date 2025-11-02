import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign.css"; // custom styles

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        console.log("✅ Registered successfully:", res);
        navigate("/login");
      })
      .catch((err) => console.log("❌ Error:", err));
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
      <div className="signup-card d-flex flex-column flex-md-row shadow-lg rounded-4 overflow-hidden">
        {/* Left Side (Image / Illustration) */}
        <div className="signup-left d-flex flex-column justify-content-between p-4 position-relative">
          <div className="signup-text mt-4">
            <h5 className="fw-semibold text-white">
              Find 3D Objects, Mockups
              <br />
              and Illustrations here.
            </h5>
          </div>
          <img
            src="sign.png"
            alt="3D Design"
            className="img-sign position-absolute bottom-0 end-0"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="signup-right p-5 flex-fill">
          <h3 className="fw-bold text-center mb-4">Create Account</h3>

          <div className="d-flex justify-content-center gap-3 mb-4">
            <button className="btn btn-outline-danger">
              <i className="bi bi-google me-2"></i> Sign up with Google
            </button>
            <button className="btn btn-outline-primary">
              <i className="bi bi-facebook me-2"></i> Sign up with Facebook
            </button>
          </div>

          <div className="text-center text-muted mb-4">— OR —</div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="sign-control form-control rounded-3"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="sign-control form-control rounded-3"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-3 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="sign-control form-control rounded-3 pe-5"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <i
                className={`bi ${
                  showPassword ? "bi-eye-slash" : "bi-eye"
                } position-absolute end-0 top-50 translate-middle-y me-3 text-muted`}
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            <button
              type="submit"
              className="btn btn-info text-white w-100 py-2 rounded-3 mb-3"
            >
              Create Account
            </button>

            <p className="text-center text-muted">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-info fw-semibold text-decoration-none"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
