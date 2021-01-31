import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import "./login.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form id="loginForm" onSubmit={onLogin}>
        <div>
          <h1 id="login-logo">Photeria</h1>
        </div>
        <div id="login-errors">
          {errors.map((error,i) => (
            <div key={i}>{error}</div>
          ))}
        </div>
        <div className="login-fields">
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="login-fields">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <button id="login-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
