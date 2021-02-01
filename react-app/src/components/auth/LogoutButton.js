import React from "react";
import {useHistory, useHistroy} from "react-router-dom"
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  const history = useHistory()
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
