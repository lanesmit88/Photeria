import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { submitTheForm } from "../../store/Messages";
import "./Messages.css";

function TypeMessage(props) {
  let { userId } = useParams();
  const [typed, setTyped] = useState(true);
  const [formValue, setFormValue] = useState();
  let dispatch = useDispatch();
  const submittingtheForm = (formValue) => {
    // e.preventDefault()
    dispatch(submitTheForm(formValue, userId, props.sentToId));
  };
  return (
    <div className="messageContainer">
      <form
        method="post"
        action={`/dm/submitTheForm`}
        onSubmit={submittingtheForm}
      >
        <textarea
          value={formValue}
          // type="textarea"
          placeholder="Message"
          onClick={() => setTyped(false)}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button hidden={typed}>Send</button>
      </form>
    </div>
  );
}

export default TypeMessage;
