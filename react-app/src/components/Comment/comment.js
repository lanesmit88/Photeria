import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../../store/comment";
import { useParams } from "react-router-dom";

function CommentComponent({ postId }) {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  //   const { id } = useParams();

  //   const user = useSelector((state) => state.user);

  //   useEffect(() => {
  //     console.log(newComment)
  //   }, [newComment]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(createComment(postId, newComment));
    setNewComment("");
  }

  return (
    <form onSubmit={(e) => submitHandler(e)} method={"POST"}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Leave a comment"
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default CommentComponent;
