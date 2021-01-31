import React, { useEffect, useState } from "react";
import TypeMessage from "./TypeMessage";
import "./Messages.css";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificUserMessages } from "../../store/Messages";

// import AllMessages from "./AllMessages/AllMessages";

function Messages(props) {
  let loggedInUser = 4;
  const [onChangeSubmitButton, setOnChangeSubmitButton] = useState(false);
  // console.log(props.user.userClicked);
  // console.log("state", onChangeSubmitButton);
  const specificUserMessages = useSelector(
    (state) => state.messages.specificUserMessages
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificUserMessages(loggedInUser, props.user));
  }, [props.user, onChangeSubmitButton]);
  // console.log(specificUserMessages);
  const messagesArray = (recievedMessages, sentMessages) => {
    let test = [...recievedMessages];
    let test1 = [...sentMessages];
    let recipientMessages = test;
    let senderMessages = test1;
    let array = [];

    for (let i = -senderMessages.length; i < senderMessages.length; i++) {
      for (
        let j = -recipientMessages.length;
        j < recipientMessages.length;
        j++
      ) {
        if (
          Date.parse(senderMessages[0].createdAt) <=
          Date.parse(recipientMessages[0].createdAt)
        ) {
          array.push(senderMessages[0]);
          senderMessages.splice(0, 1);

          break;
        } else {
          array.push(recipientMessages[0]);
          recipientMessages.splice(0, 1);
        }
      }
    }
    if (senderMessages.length > 0) {
      senderMessages.forEach((msg) => array.push(msg));
    } else if (recipientMessages.length > 0) {
      recipientMessages.forEach((msg) => array.push(msg));
    }

    return array;
  };
  return (
    <>
      {/* <AllMessages /> */}

      <div className="wrapEverything">
        <div className="mainMessagesDiv">
          {specificUserMessages
            ? messagesArray(
                specificUserMessages.recievedMessages,
                specificUserMessages.sentMessages
              ).map((message) =>
                message.senderId != 4 ? (
                  <div key={message.id} className="senderMessageBlock">
                    <img src={message.senderPP} alt={message.senderUsername} />
                    <div className="senderMessageDiv">
                      <p>{message.text} </p>
                    </div>
                  </div>
                ) : (
                  <div key={message.id} className="userMessageBlock">
                    <p>{message.text}</p>
                  </div>
                )
              )
            : ""}
        </div>
        <div className="typeMessageDiv">
          <TypeMessage state={setOnChangeSubmitButton} sentToId={props.user} />
        </div>
      </div>
    </>
  );
}

export default Messages;
