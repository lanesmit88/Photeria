import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Feed from "./components/feed/Feed";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import EditProfile from "./components/EditProfile/EditProfile";
import Trending from "./components/Trending";
import CommentListComponent from "./components/CommentListComponent/commentlist";
import FollowComponent from "./components/FollowComponent/FollowComponent";
import TestComponent from "./components/TestComponent/testcomponent";
import MessagesPage from "./components/Messages/MessagePage";

import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setLoggedInUserId(user.id);
      }
      setLoaded(true);
    })();
  }, []);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <NavBar
        setAuthenticated={setAuthenticated}
        authenticated={authenticated}
        loggedInUserId={loggedInUserId}
      />
      <Switch>
        <ProtectedRoute
          path="/trending"
          exact={true}
          authenticated={authenticated}
        >
          <Trending />
        </ProtectedRoute>
        <Route path="/dm/:userId">
          <MessagesPage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/profile/:id" exact={true}>
          <ProfilePage />
        </Route>
        <Route path="/commenttest" exact={true}>
          <CommentListComponent postId="2" />
          {/* <CommentComponent postId='1' /> */}
        </Route>

        <Route path="/phototest" exact={true}>
          <TestComponent />
        </Route>
        <Route path="/followtest" exact={true}>
          <FollowComponent postId="5" />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <Feed />
        </ProtectedRoute>

        {/* double check these routes */}
        <Route exact path="/element">
          <ProfilePage />
        </Route>
        <Route path="/edit/profile">
          <EditProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
