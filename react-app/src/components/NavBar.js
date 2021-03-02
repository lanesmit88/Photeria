import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";

const NavBar = ({ setAuthenticated, authenticated, loggedInUserId }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {authenticated && (
          <li>
            <NavLink
              className="profile-link"
              exact={true}
              to={`/profile/${loggedInUserId}`}
            >
              Profile
            </NavLink>
          </li>
        )}
        {authenticated && (
          <li>
            <NavLink className="trending-link" exact={true} to={`/trending`}>
              Trending
            </NavLink>
          </li>
        )}

        {!authenticated && (
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
        )}
        {!authenticated && (
          <li>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        {authenticated && (
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
