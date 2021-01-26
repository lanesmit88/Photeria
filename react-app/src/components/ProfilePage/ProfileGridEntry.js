import React from "react";
import { useState, useEffect } from "react";
import './profileGrid.css'

function ProfileGridEntry({imgSrc}) {

//   const [call,setCall] = useState([])

//   useEffect(()=>{
//      alert(imgSrc)
//   },[])  
  return (

        <div className='red grid-entry' style={{ backgroundImage: `url(${imgSrc})` }}>
            <div className='hover'>
                <div className='hover-details'>
                    <div><span>Likes</span></div>
                    <div><span>Comments</span></div>
                </div>
            </div>
        </div>
  );
}

export default ProfileGridEntry;