import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/loggedIn";

const NavBar = ({ setAuthenticated, loggedIn }) => {
  
  // let [loggedIn,setLogin] = useState(sentLoggedIn)
  // let loggedIn=true

  // const dispatch = useDispatch();
  // const userStatus = useSelector((reduxState) => {
  //   return reduxState
  // },[]);
  
  // useEffect(() => {
  //   const getstuff = async() => {
  //     // setLogin= await dispatch(loginUser());
  //     console.log('----------------', userStatus)
  //     console.log(loggedIn)
  //   }
  //   getstuff()
  // }, []);

  return (
    <nav>
    
      <ul>
  
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
          {!loggedIn &&
        <div className='flex' style={{width: '140px', justifyContent:"space-between",marginRight:"50px"}}>
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
            
          </li>
          
          <li>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </li>

        </div>
        }
          
     
          { loggedIn &&
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
        }
      </ul>
    </nav>
  );
};

export default NavBar;
