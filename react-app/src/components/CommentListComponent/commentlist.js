import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from "react-redux";
import commentReducer, {getPostComments} from '../../store/comment'
import {useParams} from 'react-router-dom'



function CommentListComponent({postId}) {
  const dispatch = useDispatch();
//   const [postComments,setPostComments] = useState()
 const postComments = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getPostComments(postId))
    // console.log(postComments)
  }, []);



    return(
        <div>
            <h1>Things</h1>
            <ul>
         { postComments && 
                console.log(postComments)
            } 

            </ul>
        </div>
    )
}

export default CommentListComponent