import React from "react";
import { useState } from "react";

import AllMessages from "./AllMessages/AllMessages";
import Messages from "../Messages/Messages";
import "./Messages.css";

function MessagesPage() {
  const [messageOpen, setMessageOpen] = useState(false);
  return (
    <>
      <AllMessages state={{ messageOpen, setMessageOpen }} />
      {messageOpen ? (
        <Messages />
      ) : (
        <div
          className="messagesPage"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.11)",

            marginLeft: "35.3%",
            borderRadius: "10px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            height: "548.7px",
            borderBottom: "none",
          }}
        ></div>
      )}
    </>
  );
}

export default MessagesPage;
