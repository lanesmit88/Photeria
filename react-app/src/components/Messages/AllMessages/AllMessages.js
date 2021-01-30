import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages } from "../../../store/Messages";
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
    if (sent.length && recieved.length) {
      //RECIEVERS
      let recievers = [];
      for (let i = 0; i < sent.length; i++) {
        recievers.push(sent[i].recipientId);
      }
      console.log("RECIEVERS", recievers);
      //in the recievers user will never the recipient
      //in the senders user will never be the sender
      //SENDERS
      let senders = [];
      for (let j = 0; j < recieved.length; j++) {
        senders.push(recieved[j].senderId);
      }
      console.log(senders, "SENDERS");
      //MATCHED OR NOT MEANING EITHER THEY SENT AND RECIEVED OR JUST SENT OR RECIEVED
      let matched = [];
      let unmatched = [];
      for (let m = 0; m < recievers.length; m++) {
        if (
          senders.indexOf(recievers[m]) >= 0 &&
          matched.indexOf(recievers[m]) < 0
        ) {
          matched.push(recievers[m]);
        } else {
          if (unmatched.indexOf(recievers[m]) < 0) {
            unmatched.push(recievers[m]);
          }
        }
      }

      for (let i = 0; i < senders.length; i++) {
        if (
          matched.indexOf(senders[i]) < 0 &&
          unmatched.indexOf(senders[i]) < 0
        ) {
          unmatched.push(senders[i]);
        }
      }
      console.log("matched", matched);
      console.log("unmatched", unmatched);

      let Random = [...sent, ...recieved];
      let placeholder;
      console.log(Random);
      for (let j = 0; j < Random.length; j++) {
        for (let i = 0; i < Random.length; i++) {
          if (Random[j].createdAt > Random[i].createdAt) {
            placeholder = Random[j];
            Random[j] = Random[i];
            Random[i] = placeholder;
          }
        }
      }

      let holder = [];
      for (let i = 0; i < Random.length; i++) {
        for (let j = 0; j < matched.length; j++) {
          if (
            Random[i].senderId == matched[j] ||
            Random[i].recipientId == matched[j]
          ) {
            holder.push(Random[i]);
            break;
          }
        }
        for (let j = 0; j < Random.length; j++) {
          if (
            Random[i].senderId == unmatched[j] ||
            Random[i].recipientId == unmatched[j]
          ) {
            holder.push(Random[i]);
            break;
          }
        }
      }
      console.log(holder, "holder");
    }
    return ["hi"];
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
              ).map((d, i) => <div key={i}>{d}</div>)
            : console.log("yusd")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AllMessages;
