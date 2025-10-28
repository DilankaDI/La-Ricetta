import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    navigate("/profile"); // Redirect to profile after login
  };

  return (
    <div className="l-container">
      <div className="l-box">
        <h2 className="l-title">Welcome Back 👋</h2>
        <p className="l-subtext">Log in to continue exploring recipes</p>
        <form onSubmit={handleLogin} className="l-form">
          <div className="l-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="l-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="l-btn">
            Log In
          </button>
        </form>
        <p className="l-switch">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
