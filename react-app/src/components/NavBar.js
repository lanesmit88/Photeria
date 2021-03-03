import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import SearchComponent from './SearchComponent/SearchComponent'
const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {/* {authenticated && ( */}
          <li>
            <NavLink className="trending-link" exact={true} to={`/trending`}>
              Trending
            </NavLink>
          </li>
        {/* )} */}

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
         <SearchComponent />
        </li>
        {/* {authenticated && ( */}
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        {/* )} */}
      </ul>
    </nav>
  );
};

export default NavBar;
