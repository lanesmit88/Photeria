import React, { useReducer } from "react";
// import { useState } from "react";
import "./AllMessages.css";

function AllMessages(props) {
  return (
    <>
      <div className="allMessagesContainer">
        <div className="inboxDisplayDiv">
          <h2>Inbox</h2>
          {/* <button></button> */}
        </div>
        {messages.length > 0 ? (
          <div
            className="listOfMessagesDiv"
            onClick={() => props.state.setMessageOpen(true)}
          >
            <img src={messages.user.profile} alt={messages.user.name} />
            <div className="messageDetail">
              <p style={{ fontSize: "14px" }}>{messages.user.name}</p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(10,10,10,0.3)",
                  fontWeight: "light",
                  paddingTop: "2px",
                }}
              >
                {messages[0].text}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default AllMessages;