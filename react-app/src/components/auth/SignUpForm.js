import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";
import "./signup.css";
import { useSelector, useDispatch } from "react-redux";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const reduxStore = useSelector((storeData) => {
    return storeData;
  });

  console.log(reduxStore);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form
        id="signupForm"
        onSubmit={() => {
          dispatch();
        }}
      >
        <div>
          <h1 id="signup-logo">Photeria</h1>
        </div>
        <div class="signup-fields">
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            placeholder="First Name"
          ></input>
        </div>
        <div class="signup-fields">
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            placeholder="Last Name"
          ></input>
        </div>
        <div class="signup-fields">
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            placeholder="Username"
          ></input>
        </div>
        <div class="signup-fields">
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder="Email"
          ></input>
        </div>
        <div class="signup-fields">
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder="Password"
          ></input>
        </div>
        <div class="signup-fields">
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder="Confirm Password"
          ></input>
        </div>
        <button id="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
