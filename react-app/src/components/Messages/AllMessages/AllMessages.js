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
    let latesttext;
    // console.log(sent, recieved);
    if (sent.length > 0) {
      // console.log("LENGHT FINE");
      for (let i = 0; i < sent.length; i++) {
        if (recieved.length > 0) {
          // console.log("RECIVEVED FINE");
          // console.log(alreadySentOrRecieved.indexOf(sent[i].recipiendId) < 0);
          for (let j = 0; j < recieved.length; j++) {
            if (
              sent[i].recipientId == recieved[j].senderId &&
              alreadySentOrRecieved.indexOf(sent[i].recipientId) < 0
            ) {
              console.log("how many times");
              if (
                Date.parse(sent[i].createdAt) >
                Date.parse(recieved[j].createdAt)
              ) {
                latesttext = sent[i];
              } else latesttext = recieved[j];
              alreadySentOrRecieved.push(sent[i].recipientId);
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
                      {latesttext.text}
                    </p>
                  </div>
                </div>
              );
              //
            } else if (
              // recieved[j].recipiendId === 4 &&
              alreadySentOrRecieved.indexOf(recieved[j].senderId) < 0
            ) {
              console.log(sent[i].recipientId, recieved[j].senderId);
              if (true) {
                Date.parse(sent[i].createdAt) >
                Date.parse(recieved[j].createdAt)
                  ? (latesttext = sent[i])
                  : (latesttext = recieved[j]);
              }
              // latesttext = recieved[j];
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
                      {latesttext.text}
                    </p>
                  </div>
                </div>
              );
            }
          }
        }
        if (alreadySentOrRecieved.indexOf(sent[i].recipientId) < 0) {
          alreadySentOrRecieved.push(sent[i].recipientId);
          allData.push(
            <div
              key={sent[i].createdAt}
              className="listOfMessagesDiv"
              onClick={() => props.state.setMessageOpen(true)}
            >
              <img src={sent[i].recieverPP} alt={sent[i].recieverUsername} />
              <div className="messageDetail">
                <p style={{ fontSize: "14px" }}>{sent[i].recieverUsername}</p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(10,10,10,0.3)",
                    fontWeight: "light",
                    paddingTop: "2px",
                  }}
                >
                  {"Sent Message"}
                </p>
              </div>
            </div>
          );
          //just display the sent messages
        }
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
