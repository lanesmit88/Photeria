import React, { useState } from "react";

function TypeMessage() {
  const [typed, setTyped] = useState(false);
  return (
    <div className="messageContainer" style={{ marginTop: "400px" }}>
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
