import React from "react";
import "./SendMessage.css";

function SendMessage(props) {
  return (
    <div className="sendMessageForm">
      <form method="post" action={`/dm/${props.userId}`}>
        <input placeholder="Send To..." />
        <textarea placeholder="Write here.." />
        <button>Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
