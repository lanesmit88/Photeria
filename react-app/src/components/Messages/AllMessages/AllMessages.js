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
    let secondly = [];
    if (recieved.length > 0) {
      let latestMessage = [];
      let recievedFrom;
      let popped = [];
      for (let i = 0; i < recieved.length; i++) {
        // for (let j = 0; j < sent.length; j++) { if (recieved[i].recipientId === senderId)}
        if (popped.indexOf(recieved[i].senderId) >= 0) {
          latestMessage.push(recieved[i].text);
        } else {
          latestMessage.push(recieved[i].text);

          recievedFrom = (
            <div
              key={recieved[i].id}
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
    // console.log(sent);
    if (sent.length > 0) {
      let sentPopped = [];
      let latestMessage = [];
      let sentTo;
      for (let i = 0; i < sent.length; i++) {
        for (let j = 0; j < recieved.length; j++) {
          if (sent[i].senderId === recieved[j].senderId) {
            console.log("is this working");
            break;
          } else {
            if (sentPopped.indexOf(sent[i].recipientId) >= 0) {
              latestMessage.push(sent[i].text);
              // console.log("sentPoppedIndex");
              // console.log(sentPopped);
            } else {
              // console.log("notSendPopped");
              latestMessage.push(sent[i].text);
              sentTo = (
                <div
                  key={sent[i].id}
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
              secondly.push(sentTo);
              sentPopped.push(sent[i].recipientId);
            }
          }
        }
      }
    }
    // console.log(recievedData);
    return [secondly, recievedData];
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
              ).map((data, i) => <div key={i}>{data}</div>)
            : console.log("yusd")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AllMessages;
