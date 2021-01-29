import React, { useReducer, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages } from "../../../store/Messages";

// import { useState } from "react";
import "./AllMessages.css";

function AllMessages(props) {
  let [messagesDelivered, setMessagesDelivered] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMessages(props.state.userId)).then(() =>
      setMessagesDelivered(true)
    );
  }, []);

  let messages = useSelector((state) => state.messages.allMessages);

  function conversations(sent, recieved) {
    let recievedData = [];
    if (recieved.length > 0) {
      let latestMessage = [];
      let recievedFrom;
      let popped = [];
      for (let i = 0; i < recieved.length; i++) {
        if (popped.indexOf(recieved[i].senderId) >= 0) {
          latestMessage.push(recieved[i].text);
        } else {
          latestMessage.push(recieved[i].text);

          recievedFrom = (
            <div
              className="listOfMessagesDiv"
              onClick={() => props.state.setMessageOpen(true)}
            >
              <img
                src={recieved[i].senderPP}
                alt={recieved[i].senderUsername}
              />
              <div className="messageDetail">
                <p style={{ fontSize: "14px" }}>{recieved[i].senderUsername}</p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(10,10,10,0.3)",
                    fontWeight: "light",
                    paddingTop: "2px",
                  }}
                >
                  {latestMessage[latestMessage.length - 1]}
                </p>
              </div>
            </div>
          );
          recievedData.push(recievedFrom);
          popped.push(recieved[i].senderId);
        }
      }
    }
    if (sent.length > 0) {
      let sentPopped = [];
      let latestMessage = [];
      let sentTo;
      for (let i = 0; i < sent.length; i++) {
        for (let j = 0; j < recieved.length; j++) {
          if (sent[i].senderId === recieved[j].recipientId) {
            break;
          } else {
            if (sentPopped.indexOf(sent[i].recipientId)) {
              latestMessage.push(sent[i].text);
            } else {
              latestMessage.push(sent[i].text);
              sentTo = (
                <div
                  className="listOfMessagesDiv"
                  onClick={() => props.state.setMessageOpen(true)}
                >
                  <img
                    src={sent[i].recieverPP}
                    alt={sent[i].recieverUsername}
                  />
                  <div className="messageDetail">
                    <p style={{ fontSize: "14px" }}>
                      {sent[i].recieverUsername}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(10,10,10,0.3)",
                        fontWeight: "light",
                        paddingTop: "2px",
                      }}
                    >
                      {latestMessage[latestMessage.length - 1]}
                    </p>
                  </div>
                </div>
              );
              recievedData.push(sentTo);
              sentPopped.push(sent[i].recipientId);
            }
          }
        }
      }
    }
    return recievedData;
  }
  return (
    <>
      {messagesDelivered ? (
        <div className="allMessagesContainer">
          <div className="inboxDisplayDiv">
            <h2>Inbox</h2>
          </div>
          {messages.recievedMessages || messages.sentMessages
            ? conversations(
                messages.sentMessages,
                messages.recievedMessages
              ).map((data) => <>{data}</>)
            : console.log("yusd")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AllMessages;
