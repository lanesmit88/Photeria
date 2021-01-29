// if (recieved[i].senderId === sent[i].recipientId) {
//     do this
// } else if (recieved[i].senderId !== sent[i].recipientId) {
//     do this
// } else if (sent[i].recipientId !== )

// if i send a message and there is nothing in the recieve then do this
// else if i send a message and there is a recieve then do this
// else if i recieve a message and dont send a message then do this

// if i send a message to a recipient and i dont recieve anything from sender then do this
// else if i send a message to a recipient and there is a recieved message from the sender then do this
// else if i recieve a message from sender and there is no response from me the recipient then do this

// console.log(!messagesHeld.indexOf(allMessages[1].recipientId) >= 0);
// for (let i =0; i < allMessages.length; i++) {

// }
// [1,2,3,4,5,6]
// for
// for (let i = 0; i <= allMessages.length - 1; i++) {
//   // console.log(allMessages[5]);
//   console.log(allData);
//   // if (allMessages[i] === undefined) {
//   //   break;
//   // }
//   for (let j = 1; j < allMessages.length; j++) {
//     if (
//       allMessages[i].recipientId === allMessages[j].senderId &&
//       !messagesHeld.indexOf(allMessages[i].recipientId) >= 0 &&
//       !messagesHeld.indexOf(allMessages[j].senderId) >= 0
//     ) {
//       console.log("works");
//       let sent;
//       if (allMessages[i].recipientId != 4) sent = allMessages[i];
//       console.log(sent, "SENTTNT");
//       temp = (
//         <div
//           key={sent.createdAt}
//           className="listOfMessagesDiv"
//           onClick={() => props.state.setMessageOpen(true)}
//         >
//           <img src={sent.recieverPP} alt={sent.recieverUsername} />
//           <div className="messageDetail">
//             <p style={{ fontSize: "14px" }}>{sent.recieverUsername}</p>
//             <p
//               style={{
//                 fontSize: "13px",
//                 color: "rgba(10,10,10,0.3)",
//                 fontWeight: "light",
//                 paddingTop: "2px",
//               }}
//             >
//               {sent.text}
//             </p>
//           </div>
//         </div>
//       );
//       allData.push(temp);
//       messagesHeld.push(allMessages[i].recipientId);
//       messagesHeld.push(allMessages[j].senderId);
//     } else if (
//       (allMessages[i].recipientId != allMessages[j].senderId &&
//         !messagesHeld.indexOf(allMessages[i].recipientId) >= 0) ||
//       !messagesHeld.indexOf(allMessages[j].senderId) >= 0
//     ) {
//       if (allMessages[i].recipientId === 4) {
//         temp = (
//           <div
//             key={allMessages[i].createdAt}
//             className="listOfMessagesDiv"
//             onClick={() => props.state.setMessageOpen(true)}
//           >
//             <img
//               src={allMessages[i].senderPP}
//               alt={allMessages[i].senderUsername}
//             />
//             <div className="messageDetail">
//               <p style={{ fontSize: "14px" }}>
//                 {allMessages[i].senderUsername}
//               </p>
//               <p
//                 style={{
//                   fontSize: "13px",
//                   color: "rgba(10,10,10,0.3)",
//                   fontWeight: "light",
//                   paddingTop: "2px",
//                 }}
//               >
//                 {allMessages[i].text}
//               </p>
//             </div>
//           </div>
//         );
//       }
//       allData.push(temp);
//       messagesHeld.push(allMessages[i].recipientId);
//       messagesHeld.push(allMessages[j].senderId);
//     }
//   }
// }
// console.log(allData, "allData", messagesHeld);
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

//260
// for (let i = 0; i < allMessages.length; i++) {
//   for (let j = 1; j < allMessages.length; j++) {
//     if (
//       //this means they havent had a conversation
//       allMessages[i].recipientId === allMessages[j].senderId &&
//       allMessages[i].recipientId != 4 &&
//       messagesHeld.indexOf(allMessages[i].recipientId) < 0
//     ) {
//       messagesHeld.push(allMessages[i].recipientId);
//       allData.push(
//         <div
//           key={allMessages[i].id}
//           className="listOfMessagesDiv"
//           onClick={() => props.state.setMessageOpen(true)}
//         >
//           <img
//             src={allMessages[i].recieverPP}
//             alt={allMessages[i].recieverUsername}
//           />
//           <div className="messageDetail">
//             <p style={{ fontSize: "14px" }}>
//               {allMessages[i].recieverUsername}
//             </p>
//             <p
//               style={{
//                 fontSize: "13px",
//                 color: "rgba(10,10,10,0.3)",
//                 fontWeight: "light",
//                 paddingTop: "2px",
//               }}
//             >
//               {"latestMessage[latestMessage.length - 1]"}
//             </p>
//           </div>
//         </div>
//       );
//     } else if (
//       allMessages[i].recipientId != allMessages[j].senderId &&
//       allMessages[i].recipientId != 4 &&
//       messagesHeld.indexOf(allMessages[i].recipientId) < 0
//     ) {
//       allData.push(
//         <div
//           key={allMessages[i].id}
//           className="listOfMessagesDiv"
//           onClick={() => props.state.setMessageOpen(true)}
//         >
//           <img
//             src={allMessages[i].recieverPP}
//             alt={allMessages[i].recieverUsername}
//           />
//           <div className="messageDetail">
//             <p style={{ fontSize: "14px" }}>
//               {allMessages[i].recieverUsername}
//             </p>
//             <p
//               style={{
//                 fontSize: "13px",
//                 color: "rgba(10,10,10,0.3)",
//                 fontWeight: "light",
//                 paddingTop: "2px",
//               }}
//             >
//               {"latestMessage[latestMessage.length - 1]"}
//             </p>
//           </div>
//         </div>
//       );
//     } else if (
//       allMessages[i].recipientId === 4 &&
//       messagesHeld.indexOf(4) < 0 &&
//       messagesHeld.indexOf(allMessages[i].senderId) < 0
//     ) {
//       messagesHeld.push(4);
//       allData.push(
//         <div
//           key={allMessages[i].id}
//           className="listOfMessagesDiv"
//           onClick={() => props.state.setMessageOpen(true)}
//         >
//           <img
//             src={allMessages[i].recieverPP}
//             alt={allMessages[i].recieverUsername}
//           />
//           <div className="messageDetail">
//             <p style={{ fontSize: "14px" }}>
//               {allMessages[i].recieverUsername}
//             </p>
//             <p
//               style={{
//                 fontSize: "13px",
//                 color: "rgba(10,10,10,0.3)",
//                 fontWeight: "light",
//                 paddingTop: "2px",
//               }}
//             >
//               {"latestMessage[latestMessage.length - 1]"}
//             </p>
//           </div>
//         </div>
//       );
//     }
//     //if the recipient id is 4 and sender is not in messageheld
//   }
// }
