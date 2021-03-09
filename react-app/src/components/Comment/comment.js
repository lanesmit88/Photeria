import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from "react-redux";
import {createComment} from '../../store/comment'
import {useParams} from 'react-router-dom'



function CommentComponent({postId}) {
  const dispatch = useDispatch();
  const [newComment,setNewComment] = useState('')
//   const { id } = useParams();

//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     console.log(newComment)
//   }, [newComment]);

    function submitHandler(e){
        e.preventDefault();
        console.log(newComment)
        dispatch(createComment(postId, newComment));
    }

    return(
        <form onSubmit={e => submitHandler(e)} action={''} method={'POST'}>
            <textarea onKeyUp={e => setNewComment(e.target.value)} placeholder='Leave a comment'></textarea>
            <button type='submit' className='feed-button'>Post</button>
        </form>
    )
}

export default CommentComponent
