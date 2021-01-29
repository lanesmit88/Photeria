import React from "react";
import { useState } from "react";
import CreateComment from "../Comment/comment";
import { Modal } from "../../context/Modal";
import CommentComponent from "../Comment/comment";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../../store/post";
import { fetchPostLikes } from "../../store/postLikes";


import "./Post.css";

function Post({
  caption,
  comment,
  createdAt,
  hashtags,
  id,
  likes,
  location,
  photoData,
  updatedAt,
  userId,
}) {
  // const [likeColor, likeColorChange] = useState("rgba(10,10,10, 0.4)");
  const [testTrue, setTest] = useState(false);
  const [stnule, stNull] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const usersData = useSelector((reduxState) => {
    return reduxState.allUsers.users;
  })

  // useEffect(async () => {
  //   console.log(usersData)
  // }, [usersData]);

  let user = usersData.find((temp) => {
    return temp.id === userId;
  });
  console.log(user);

  const likeSubmit = async () => {
    // edit fetch call to specific post
    await fetch("/api/post/1/like", {
      method: "POST",
    });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="headerBlock">
          <img src={photoData} alt={"hi"} />
          <a href={"/"}>Username</a>
        </div>
        <div className="imageBlock">
          <img src={photoData} alt={"sydfgui"} />
        </div>
        <div className="detailBlock">
          {/* Likes and other details */}
          <div className="iconBlock">
            <button onClick={() => likeSubmit()}>Like</button>
            <button>Comment</button>
            <button>DM</button>
          </div>
          <div className="likeBlock">
            <p>
              {/* Liked by <a href={"/"}>User</a> and{" "} */}
              <a onClick={() => setShowModal(true)}>{likes.length} Likes</a>
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <div id="modal-div">
                    <ul>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                      <li>User liked this post</li>
                    </ul>
                  </div>
                </Modal>
              )}
            </p>
          </div>
          <div className="captionBlock">
            <div className="hi" style={{ width: "auto" }}>
              <a href={"/"}>User Name</a>
            </div>{" "}
            <div className="testing">
              {!testTrue && caption.length > 60 ? (
                <p className="test">
                  {/* // {testingagain && captionTxt}
                  // {!testingagain && captionTxt.slice(0, 55)} */}
                  {caption.slice(0, 55)}
                  <span
                    className="readMoreSpan"
                    style={{
                      marginLeft: "1px",
                    }}
                    onClick={() => setTest(true)}
                  >
                    read more
                  </span>
                </p>
              ) : caption.length <= 60 ? (
                <p style={{ display: "inline-block" }}>{caption}</p>
              ) : (
                <p>
                  {caption}
                  <span
                    onClick={() => setTest(false)}
                    className="collapseSpan"
                    style={{
                      marginLeft: "1px",
                    }}
                  >
                    collapse
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className={"commentBlock"}>
            {/*Displays option to view all comments if more than two exist*/}
            {comment.length > 2 && !stnule ? (
              <a
                onClick={() => {
                  stNull(true);
                }}
              >
                view all comments
              </a>
            ) : (
              ""
            )}
            {stnule ? (
              <a
                onClick={() => {
                  stNull(false);
                }}
              >
                View less comments
              </a>
            ) : (
              ""
            )}

            {stnule &&
              comment.map((eachComment) => (
                <div className="comment">
                  <div className="aTagDivComment">
                    <a href="">User Name</a>
                  </div>
                  <div className="pTagDivComment">
                    <p>{eachComment.text}</p>
                  </div>
                </div>
              ))}
            {comment.length >= 2 && !stnule && (
              <>
                <div className={"topComments"}>
                  <a href={""}>User Name</a>
                  <p>{comment[0].text}</p>
                </div>
                <div className={"topComments"}>
                  <a href={""}>User Name</a>
                  <p>{comment[1].text}</p>
                </div>
              </>
            )}
            {comment.length === 1 && !stnule && (
              <>
                <div className={"topComments"}>
                  <a href={""}>User Name</a>
                  <p>{comment[0].text}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="postCommentBlock">
          <CommentComponent postId={id} />
          {/* <CreateComment /> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
