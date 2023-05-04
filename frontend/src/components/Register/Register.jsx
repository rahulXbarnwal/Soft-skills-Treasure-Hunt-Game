import "./Register.css";

import React, { useState } from "react";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(Api.register, {
        name: name,
        email: email,
        password: password,
      });
      if (res) {
        toast.success(`Successfully Registered`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/login");
      }
    } catch (err) {
      toast.error(`${err.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <div className="registration-page">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
