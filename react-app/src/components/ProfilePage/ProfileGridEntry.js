import React from "react";
import { useState, useEffect } from "react";
import './profileGrid.css'

function ProfileGridEntry({imgSrc, numLikes,numComments}) {

//   const [call,setCall] = useState([])

//   useEffect(()=>{
//      alert(imgSrc)
//   },[])  
  return (

        <div className='red grid-entry' style={{ backgroundImage: `url(${imgSrc})` }}>
            <div className='hover'>
                <div className='hover-details'>
                    <div><span><i class='far fa-heart'></i> {numLikes}</span></div>
                    <div><span><i class='far fa-comment'></i> {numComments}</span></div>
                </div>
            </div>
        </div>
  );
}

export default ProfileGridEntry;