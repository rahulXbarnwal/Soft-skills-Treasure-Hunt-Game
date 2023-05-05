import "./Login.css";

import React, { useState } from "react";

import Api from "../../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("rahulbarnwalofficial@gmail.com");
  const [password, setPassword] = useState("123456789");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(Api.login, {
        email: email,
        password: password,
      });
      if (res) {
        if (res.data.isAdmin) {
          alert("Successfully logged in!");
          localStorage.setItem("adminData", JSON.stringify(res.data));
          localStorage.setItem("token", res.data.accessToken);
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
