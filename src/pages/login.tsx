import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import CustomButton from "../components/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  onClick: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",  // set default value if not provided
  children,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!validatePassword(password)) {
      setPasswordError("Please enter a valid password");
      return;
    } else {
      setPasswordError("");
    }

    // Proceed with login logic
    console.log("Request Body:", { email, password });
    const response = await axios.post('http://localhost:3000/php/login2.php', {
        email,
        password,
      },{
        withCredentials: true,
      });

    const data = response.data;

    if (response.status===200) {
      localStorage.setItem('session_id', data.session_id);
      console.log(data);
      //navigate("/");
    } else {
      return console.error(data.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <CustomButton type="submit">Login</CustomButton>
        <div className="switch-page">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
