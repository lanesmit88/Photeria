import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import { getFollowers, sendMessage } from "../../store/Messages";
import "./SendMessage.css";

function SendMessage(props) {
  let { userId } = useParams();
  console.log("use", userId);
  const dispatch = useDispatch();
  let [textValue, setTextValue] = useState();
  let [selectValue, setSelectValue] = useState();
  let [state, setState] = useState(false);
  let [textValuess, setTextValuess] = useState(false);

  let allData = useSelector((state) => state.messages.allFollowers);
  // console.log(allData);
  useEffect(() => {
    dispatch(getFollowers(userId)).then(() => setState(true));
  }, []);
  const sendText = (e, userId, selectValue, textValue) => {
    e.preventDefault();
    dispatch(sendMessage(userId, selectValue, textValue));
    setSelectValue("");
    setTextValue("");
    setTextValuess(true);
    props.replacer(true);
    props.setModelState(false);
  };
  return (
    <div className="sendMessageForm">
      {state ? (
        <form
          onSubmit={(e) => sendText(e, userId, selectValue, textValue)}
          method="post"
          action={`/dm/${userId}`}
        >
          <select
            onChange={(e) => setSelectValue(e.target.value)}
            placeholder="Send To..."
          >
            <option>Send To...</option>
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
      ) : (
        ""
      )}
    </div>
  );
}

export default SendMessage;
