import React from "react";
import CreateComment from "../Comment/comment";


function Post() {
  let comments = [1, 1, 1]
  return (
    <>
      <div className="wrapper">
        <div className="headerBlock">
          <img src={""} alt={""} />
          <a href={"/"}>Profile Name</a>
        </div>
        <div className="imageBlock">
          <img src={""} alt={""} />
        </div>
        <div className="detailBlock">
          {/* Likes and other details */}
          <div className="iconBlock">
            <button>Like</button>
            <button>Comment</button>
            <button>DM</button>
          </div>
          <div className="likeBlock">
            <p>
              Liked by <a href={"/"}>User</a> and <p>Total Likes{}</p>
            </p>
          </div>
          <div className="captionBlock">
            <a href={"/"}>User Name</a>
            <p>Caption text</p>
          </div>
          <div className={"commentBlock"}>
            {/*Displays option to view all comments if more than two exist*/}
            {comments.length > 2 ? <a>view all comments</a> : ''}
              <div className={'topComments'}>
                <a href={''}>User Name</a><p>Comment text...</p>
              </div>
              <div className={'topComments'}>
                <a href={''}>User Name</a><p>Comment text...</p>
              </div>
              <div className='postCommentBlock'>
                <CreateComment />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
