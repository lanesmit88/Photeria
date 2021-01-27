import React, {useEffect} from "react";
import ProfileDetail from './ProfileDetail'
import ProfileGrid from './ProfileGrid'
import './profileBase.css'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getUserProfile} from '../../store/user'
import {useParams} from 'react-router-dom'



function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, []);

  if (user) {
    console.log(user)
  }


  return (
    <div className="profile-div inDiv">
      {user.user &&
      <div>
        <ProfileDetail user={user} />
        <ProfileGrid posts={user.posts} />
      </div>
  }
    </div>
  );
}

export default ProfilePage;
