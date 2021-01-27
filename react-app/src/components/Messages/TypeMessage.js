import React, { useState } from "react";
import "./Messages.css";

function TypeMessage() {
  const [typed, setTyped] = useState(false);
  return (
    <div className="messageContainer">
      <form>
        <input
          type="textarea"
          placeholder="Message"
          onChange={() => setTyped(true)}
        />
        <button hidden={typed}>Send</button>
      </form>
    </div>
  );
}

export default TypeMessage;
