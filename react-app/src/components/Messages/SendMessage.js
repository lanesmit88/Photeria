import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getFollowers } from "../../store/Messages";
import "./SendMessage.css";

function SendMessage(props) {
  let { userId } = useParams();
  const dispatch = useDispatch();
  let [textValue, setTextValue] = useState();
  let [selectValue, setSelectValue] = useState();
  let allData = useSelector((state) => state.allFollowers);
  useEffect(() => {
    dispatch(getFollowers(userId));
  }, []);
  const sendText = (e, userId, selectValue, textValue) => {
    e.preventDefault();
    dispatch(sendMessage(userId, selectValue, textValue));
    setSelectValue();
    setTextValue();
  };
  return (
    <div className="sendMessageForm">
      <form
        onSubmit={(e) => sendText(e, userId, selectValue, textValue)}
        method="post"
        action={`/dm/${props.userId}`}
      >
        <select
          onChange={(e) => setSelectValue(e.target.value)}
          placeholder="Send To..."
        >
          {allData.map((each) => (
            <option value={each}>{each}</option>
          ))}
        </select>
        <textarea
          value={textValue}
          placeholder="Write here.."
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
