import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { submitTheForm } from "../../store/Messages";
import "./Messages.css";

function TypeMessage(props) {
  let { userId } = useParams();
  const [typed, setTyped] = useState(true);
  const [formValue, setFormValue] = useState();
  console.log(formValue);
  let dispatch = useDispatch();
  let test = props.sentToId;
  const submittingtheForm = (e, formValue, userId, test) => {
    // console.log("formValkue", formValue);
    e.preventDefault();
    dispatch(submitTheForm(formValue, userId, test));
    setFormValue("");
    props.state(true);
  };
  return (
    <div className="messageContainer">
      <form
        method="post"
        action={`/dm/submitTheForm`}
        onSubmit={(e) => submittingtheForm(e, formValue, userId, test)}
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
