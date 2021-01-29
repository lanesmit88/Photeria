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
    let alreadySentOrRecieved = [];
    let allData = [];
    console.log(sent, recieved);
    if (sent.length > 0) {
      console.log("LENGHT FINE");
      for (let i = 0; i < sent.length; i++) {
        if (recieved.length > 0) {
          // console.log("RECIVEVED FINE");
          // console.log(alreadySentOrRecieved.indexOf(sent[i].recipiendId) < 0);
          for (let j = 0; j < recieved.length; j++) {
            console.log(
              "INSIDE RECIEVED LOOP AND VALUE OF SENT[I].RECIPIENTID",
              sent[i],
              recieved[j].senderId
            );
            if (
              sent[i].recipiendId == recieved[j].senderId &&
              alreadySentOrRecieved.indexOf(sent[i].recipiendId) < 0
            ) {
              console.log("INSIDE CONVERSATION HELD");
              alreadySentOrRecieved.push(sent[i].recipiendId);
              allData.push(
                <div
                  key={recieved[j].createdAt}
                  className="listOfMessagesDiv"
                  onClick={() => props.state.setMessageOpen(true)}
                >
                  <img
                    src={recieved[j].senderPP}
                    alt={recieved[j].senderUsername}
                  />
                  <div className="messageDetail">
                    <p style={{ fontSize: "14px" }}>
                      {recieved[j].senderUsername}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(10,10,10,0.3)",
                        fontWeight: "light",
                        paddingTop: "2px",
                      }}
                    >
                      {recieved[j].text}
                    </p>
                  </div>
                </div>
              );
              //
            }
            if (
              // recieved[j].recipiendId === 4 &&
              alreadySentOrRecieved.indexOf(recieved[j].senderId) < 0
            ) {
              console.log("oh no");
              alreadySentOrRecieved.push(recieved[j].senderId);
              allData.push(
                <div
                  key={recieved[j].createdAt}
                  className="listOfMessagesDiv"
                  onClick={() => props.state.setMessageOpen(true)}
                >
                  <img
                    src={recieved[j].senderPP}
                    alt={recieved[j].senderUsername}
                  />
                  <div className="messageDetail">
                    <p style={{ fontSize: "14px" }}>
                      {recieved[j].senderUsername}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(10,10,10,0.3)",
                        fontWeight: "light",
                        paddingTop: "2px",
                      }}
                    >
                      {recieved[j].text}
                    </p>
                  </div>
                </div>
              );
            }
          }
        } else {
        } //just display the sent messages
      }
    }
    console.log(allData);
    return allData;
  }
  return (
    <>
      {messagesDelivered ? (
        <div className="allMessagesContainer">
          <div className="inboxDisplayDiv">
            <h2>Inbox</h2>
          </div>
          {messages.sentMessages
            ? conversations(
                messages.sentMessages,
                messages.recievedMessages
              ).map((d) => <>{d}</>)
            : console.log("yusd")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AllMessages;
