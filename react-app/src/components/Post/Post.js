import React from "react";
import { useState } from "react";
import CreateComment from "../Comment/comment";
import { Modal } from "../../context/Modal"
import CommentComponent from '../Comment/comment'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../../store/post";
import { fetchPostLikes } from "../../store/postLikes"

import CreatePost from "../CreatePost/CreatePost";
import "./Post.css";


function Post() {
  // const [likeColor, likeColorChange] = useState("rgba(10,10,10, 0.4)");
  const [testTrue, setTest] = useState(false);
  const [stnule, stNull] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const postData = useSelector((reduxState) => {
    return reduxState.post;
  });


  // useEffect(async () => {
  //   dispatch(fetchPostData(2));
  // }, []);



  let captionTxt =
    "Hello this ishohs the lets pu tosmething that happens often maybe i dont oput this as 100% at the moment but  lets see ghssdfousnf khfiughfkgifhgkghj fhgkjfhd jfgghssdfo usnfkhfiu ghfkgif hgkghjfhg kjfhdk jfgghssdfousnfkhfiughfkgifhgkghjfhgkjfhdkj fggh ssdfous nfkhfiu ghfkgifhgkghj fhgkjfhdkjfgghss dfousnfkhfiugh fkgifhgkghjfhgk jfhdkjfgghs sdfousn khfiughfkgifhgkghjfhgkjfh dkjfgghssdfousnfkhv fiughfkgifhgkghjfhgkjfhdkjfgghssdfousnfkhfiughfkgifhgkghjfhgkjfhdkjfg";
  let comments = [
    "bunch of comments iwth the word of the fdshjk",
    "there are theh fghdghfkd let og there are theh fghdghfkd let og there are theh fghdghfkd let og  oand nomero",
    "there are ahsosndgh a snd you can let og ",
  ];
  return (
    <div>
      <div id='CreatePostButton'>
        <div>

          <p onClick={() => setShowModal(true)}>Make a Post</p>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                    <div id="modal-div">
                      <CreatePost />
                    </div>
                  </Modal>
                )}
        </div>
      </div>
      <div className="wrapper">
        <div className="headerBlock">
          <img
            src="data:image/jpeg;base64,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"
            alt={"hi"}
          />
          <a href={"/"}>Profile Name</a>
        </div>
        <div className="imageBlock">
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt={"sydfgui"}
          />
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
              Liked by <a href={"/"}>User</a> and{" "}
              <a onClick={() => setShowModal(true)}>Total Likes</a>
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
              {!testTrue && captionTxt.length > 60 ? (
                <p className="test">
                  {/* // {testingagain && captionTxt}
                  // {!testingagain && captionTxt.slice(0, 55)} */}
                  {captionTxt.slice(0, 55)}
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
              ) : captionTxt.length <= 60 ? (
                <p style={{ display: "inline-block" }}>{captionTxt}</p>
              ) : (
                <p>
                  {captionTxt}
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
            {comments.length > 2 && !stnule ? (
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
              comments.map((eachComment) => (
                <div className="comment">
                  <div className="aTagDivComment">
                    <a href="">User Name</a>
                  </div>
                  <div className="pTagDivComment">
                    <p>{eachComment}</p>
                  </div>
                </div>
              ))}
            {!stnule && (
              <>
                <div className={"topComments"}>
                  <a href={""}>User Name</a>
                  <p>Comment text...</p>
                </div>
                <div className={"topComments"}>
                  <a href={""}>User Name</a>
                  <p>Comment text...</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="postCommentBlock">
          <CommentComponent postId='1'/>
          {/* <CreateComment /> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
