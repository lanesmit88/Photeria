import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import CreateComment from "../Comment/comment";
import { Modal } from "../../context/Modal";
import CommentComponent from "../Comment/comment";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../../store/post";
import CreatePost from "../CreatePost/CreatePost";
// import { fetchPostLikes } from "../../store/postLikes";
import FollowComponent from "../FollowComponent/FollowComponent";
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
  const [tempi, setTempi] = useState(true);
  // const [newSate, setNewState] = useState(false);
  const dispatch = useDispatch();

  const usersData = useSelector((reduxState) => {
    return reduxState.allUsers.users;
  });

  let user = usersData.find((temp) => {
    return temp.id === userId;
  });

  let history = useHistory();

  useEffect(async () => {
    dispatch(fetchPostData(id));
  }, []);

  const likeSubmit = async () => {
    // edit fetch call to specific post
    await fetch(`/api/post/${id}/like`, {
      method: "POST",
    });
  };
  if (!user) {
    return null;
  }

  return (
    <div>
      <div id="CreatePostButton">
        <div>
          <p
            onClick={() => {
              setTempi(false);
            }}
          >
            Make a Post
          </p>

          <div hidden={tempi}>
            <CreatePost state={setTempi} />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="headerBlock">
          <div className="flex">
            <img src={photoData} alt={"hi"} />
            <div className="user-loc">
              <span onClick={() => history.push(`/profile/${userId}`)}>
                {user.username}
              </span>

              <span className="location-text">{location}</span>
            </div>
          </div>
          <div className="name-location">
            <FollowComponent id={id} postId={id} />
          </div>
        </div>
        <div className="imageBlock">
          <img src={photoData} alt={"sydfgui"} />
        </div>
        <div className="detailBlock">
          {/* Likes and other details */}
          <div className="iconBlock">
            <button onClick={() => likeSubmit()}>Like</button>
            <button>Comment</button>
            <button onClick={() => (window.location.href = `/dm/${6}`)}>
              DM
            </button>
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
              <a href={"/"}>{user.username}</a>
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
