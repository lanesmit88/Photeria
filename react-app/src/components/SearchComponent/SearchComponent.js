import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../store/user";
import { Link } from "react-router-dom";


function SearchComponent({ postId, id }) {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isEditing, setEditing] = useState(false);


  
  const searchUser = async (e) => {
    setSearchVal(e)
   
    if (e.length < 2) {
      setSearchResults([])
    }
    else if (e.length == 2) {
      const newSearch = await fetch(`/api/users/search/${e}`);
      const results = (await newSearch.json())
      setSearchResults(results.results)
    }
    else if (e.length > 2) {
      setSearchResults(searchResults.filter(r =>r.username.includes(e)))
    }
  };


  return (
    <>
     <input value={searchVal} className='search-bar' onFocus={()=>setEditing(true)}
      onBlur={()=>{
        setTimeout(()=>{
          setEditing(false)
          setSearchVal('')
          setSearchResults([])
        },[200])
       
       }} 
       
       onChange={(e)=>searchUser(e.target.value)}></input>
     {searchResults.length > 0 && isEditing &&
      <div className='searchDiv'>
        {searchResults.map(r => {
          return <Link onClick={()=>{dispatch(getUserProfile(r.id))}} key={r.id} to={`/profile/${r.id}`}><div className='searchResult'> <img src={r.profilePhoto} style={{maxHeight:'50px'}}></img> <p>{r.username}</p> </div></Link>
        })}
      </div>
     }
    </>
  );
}

export default SearchComponent;