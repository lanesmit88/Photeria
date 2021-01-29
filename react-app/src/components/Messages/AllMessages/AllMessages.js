import React, { useReducer, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages } from "../../../store/Messages";

// import { useState } from "react";
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
    let allMessages = [...sent, ...recieved];
    console.log(allMessages);
    let messagesHeld = [];
    let allData = [];
    let temp;
    // console.log(!messagesHeld.indexOf(allMessages[1].recipientId) >= 0);
    // for (let i =0; i < allMessages.length; i++) {

    // }
    // [1,2,3,4,5,6]
    // for
    for (let i = 0; i <= allMessages.length - 1; i++) {
      // console.log(allMessages[5]);
      console.log(allData);
      if (allMessages[i] === undefined) {
        break;
      }
      for (let j = 1; j < allMessages.length; j++) {
        if (
          allMessages[i].recipientId === allMessages[j].senderId &&
          !messagesHeld.indexOf(allMessages[i].recipientId) >= 0 &&
          !messagesHeld.indexOf(allMessages[j].senderId) >= 0
        ) {
          console.log("works");
          let sent;
          if (allMessages[i].recipientId != 4) sent = allMessages[i];
          console.log(sent, "SENTTNT");
          temp = (
            <div
              key={sent.createdAt}
              className="listOfMessagesDiv"
              onClick={() => props.state.setMessageOpen(true)}
            >
              <img src={sent.recieverPP} alt={sent.recieverUsername} />
              <div className="messageDetail">
                <p style={{ fontSize: "14px" }}>{sent.recieverUsername}</p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(10,10,10,0.3)",
                    fontWeight: "light",
                    paddingTop: "2px",
                  }}
                >
                  {sent.text}
                </p>
              </div>
            </div>
          );
          allData.push(temp);
          messagesHeld.push(allMessages[i].recipientId);
          messagesHeld.push(allMessages[j].senderId);
        } else if (
          (allMessages[i].recipientId != allMessages[j].senderId &&
            !messagesHeld.indexOf(allMessages[i].recipientId) >= 0) ||
          !messagesHeld.indexOf(allMessages[j].senderId) >= 0
        ) {
          if (allMessages[i].recipientId === 4) {
            temp = (
              <div
                key={allMessages[i].createdAt}
                className="listOfMessagesDiv"
                onClick={() => props.state.setMessageOpen(true)}
              >
                <img
                  src={allMessages[i].senderPP}
                  alt={allMessages[i].senderUsername}
                />
                <div className="messageDetail">
                  <p style={{ fontSize: "14px" }}>
                    {allMessages[i].senderUsername}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(10,10,10,0.3)",
                      fontWeight: "light",
                      paddingTop: "2px",
                    }}
                  >
                    {allMessages[i].text}
                  </p>
                </div>
              </div>
            );
          }
          allData.push(temp);
          messagesHeld.push(allMessages[i].recipientId);
          if (!messagesHeld.indexOf(allMessages[j].senderId) >= 0) {
            messagesHeld.push(allMessages[j].senderId);
          }
        }
      }
    }
    console.log(allData, "allData", messagesHeld);
    // let recievedData = [];
    // let secondly = [];
    // let messagesRecieved = [];
    // if (recieved.length > 0) {
    //   let recievedFrom;
    //   let popped = [];
    //   for (let i = 0; i < recieved.length; i++) {
    //     //6   //6
    //     let latestMessage = [];
    //     // for (let j = 0; j < sent.length; j++) { if (recieved[i].recipientId === senderId)}
    //     for (let j = 0; j < sent.length; j++) {
    //       if (recieved[i].senderId === sent[j].recipientId) {
    //         if (popped.indexOf(recieved[i].senderId) >= 0) {
    //           console.log("is this working");
    //           break;
    //         } else {
    //           popped.push(recieved[i].senderId);
    //           messagesRecieved.push(recieved[i].senderId);
    //           recievedFrom = (
    //             <div
    //               key={recieved[i].id}
    //               className="listOfMessagesDiv"
    //               onClick={() => props.state.setMessageOpen(true)}
    //             >
    //               <img
    //                 src={recieved[i].senderPP}
    //                 alt={recieved[i].senderUsername}
    //               />
    //               <div className="messageDetail">
    //                 <p style={{ fontSize: "14px" }}>
    //                   {recieved[i].senderUsername}
    //                 </p>
    //                 <p
    //                   style={{
    //                     fontSize: "13px",
    //                     color: "rgba(10,10,10,0.3)",
    //                     fontWeight: "light",
    //                     paddingTop: "2px",
    //                   }}
    //                 >
    //                   {recieved[i].text}
    //                 </p>
    //               </div>
    //             </div>
    //           );
    //         }
    //       } else {
    //         if (popped.indexOf(recieved[i].senderId) >= 0) {
    //           latestMessage.push(recieved[i].text);
    //         } else {
    //           latestMessage.push(recieved[i].text);

    //           recievedFrom = (
    //             <div
    //               key={recieved[i].id}
    //               className="listOfMessagesDiv"
    //               onClick={() => props.state.setMessageOpen(true)}
    //             >
    //               <img
    //                 src={recieved[i].senderPP}
    //                 alt={recieved[i].senderUsername}
    //               />
    //               <div className="messageDetail">
    //                 <p style={{ fontSize: "14px" }}>
    //                   {recieved[i].senderUsername}
    //                 </p>
    //                 <p
    //                   style={{
    //                     fontSize: "13px",
    //                     color: "rgba(10,10,10,0.3)",
    //                     fontWeight: "light",
    //                     paddingTop: "2px",
    //                   }}
    //                 >
    //                   {latestMessage[latestMessage.length - 1]}
    //                 </p>
    //               </div>
    //             </div>
    //           );
    //           recievedData.push(recievedFrom);
    //           popped.push(recieved[i].senderId);
    //           messagesRecieved.push(recieved[i].senderId);
    //         }
    //       }
    //     }
    //   }
    // }
    // console.log(sent);
    // if (sent.length) {
    //   console.log("is this not working");
    //   let sentPopped = [];
    //   let sentTo;
    //   for (let i = 0; i < sent.length; i++) {
    //     //6    //6
    //     let latestMessage = [];
    //     for (let j = 0; j < recieved.length; j++) {
    //       if (messagesRecieved.indexOf(sent[i].recipientId) >= 0) {
    //         // sentPopped.push(sent[i].recipientId);
    //         console.log("is this working");
    //         break;
    //       } else {
    //         if (sentPopped.indexOf(sent[i].recipientId) >= 0) {
    //           latestMessage.push(sent[i].text);
    //           // console.log("sentPoppedIndex");
    //           // console.log(sentPopped);
    //         } else {
    //           // console.log("notSendPopped");
    //           latestMessage.push(sent[i].text);
    //           sentTo = (
    //             <div
    //               key={sent[i].id}
    //               className="listOfMessagesDiv"
    //               onClick={() => props.state.setMessageOpen(true)}
    //             >
    //               <img
    //                 src={sent[i].recieverPP}
    //                 alt={sent[i].recieverUsername}
    //               />
    //               <div className="messageDetail">
    //                 <p style={{ fontSize: "14px" }}>
    //                   {sent[i].recieverUsername}
    //                 </p>
    //                 <p
    //                   style={{
    //                     fontSize: "13px",
    //                     color: "rgba(10,10,10,0.3)",
    //                     fontWeight: "light",
    //                     paddingTop: "2px",
    //                   }}
    //                 >
    //                   {latestMessage[latestMessage.length - 1]}
    //                 </p>
    //               </div>
    //             </div>
    //           );
    //           secondly.push(sentTo);
    //           sentPopped.push(sent[i].recipientId);
    //         }
    //       }
    //     }
    //   }
    // }
    // //32561
    // //3165
    // let holdval = [];
    // recievedData.forEach((e) => holdval.push(e));
    // secondly.forEach((e) => holdval.push(e));
    // // console.log(recievedData);
    // // console.log(secondly);
    // console.log(messagesRecieved);
    // return holdval;
    return allData;
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
              ).map((data, i) => <div key={i}>{data}</div>)
            : console.log("yusd")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AllMessages;
