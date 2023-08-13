import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      await axios.post("http://localhost:5566/api/auth/signup", {
        fullName,
        phone,
        email,
        password,
      });
      console.log("Registration successfull");

      navigate("/login");
    } catch (error) {
      setError(error.response.data);
      console.error("Registration failed", error.response);
    }
  };

  return (
    <>
    <h1 className="title">SignUp</h1>
    <form onSubmit={handleRegister}>
      <div className="mainregister">
        <div className="registerContainer">
          <label htmlFor="fullname">Full name</label>
          <input
            className="input"
            type="text"
            id="fullname"
            value={fullName}
            onChange={(e) => {
              setfullName(e.target.value);
            }}
            />
          <label htmlFor="mobile">Mobile</label>
          <input
            className="input"
            id="mobile"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            />
          <label htmlFor="email">Email</label>  
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
          <button class="button" >Register</button>
          {<p className="error-message1">{err}</p>}
          <p>
            Have an account? <a href="/login">Log in</a>{" "}
          </p>
        </div>
      </div>
   </form>
    </>
  );
};
export default Register;
