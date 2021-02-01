let alreadySentOrRecieved = [];
let allData = [];
let latesttext;
if (sent.length > 0) {
  for (let i = 0; i < sent.length; i++) {
    if (recieved.length > 0) {
      for (let j = 0; j < recieved.length; j++) {
        if (sent[i].recipientId === recieved[j].senderId) {
          sent[i].createdAt > recieved[j].createdAt
            ? (latesttext = sent[i])
            : (latesttext = recieved[j]);
        }
        if (
          sent[i].recipientId == recieved[j].senderId &&
          alreadySentOrRecieved.indexOf(sent[i].recipientId) < 0
        ) {
          alreadySentOrRecieved.push(sent[i].recipientId);
          allData.push(
            <div
              key={recieved[j].createdAt}
              className="listOfMessagesDiv"
              onClick={() => {
                console.log("eys");
                props.state.setMessageOpen(true);
                props.state.setUserClicked(recieved[j].senderId);
                console.log("wegsd");
              }}
            >
              <img
                src={recieved[j].senderPP}
                alt={recieved[j].senderUsername}
              />
              <div className="messageDetail">
                <p style={{ fontSize: "14px" }}>{recieved[j].senderUsername}</p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(10,10,10,0.3)",
                    fontWeight: "light",
                    paddingTop: "2px",
                  }}
                >
                  {latesttext.text}
                </p>
              </div>
            </div>
          );
        } else if (alreadySentOrRecieved.indexOf(recieved[j].senderId) < 0) {
          alreadySentOrRecieved.push(recieved[j].senderId);
          allData.push(
            <div
              key={recieved[j].createdAt}
              className="listOfMessagesDiv"
              onClick={() => {
                console.log("ISIT SECOND");

                props.state.setMessageOpen(true);
                props.state.setUserClicked(recieved[j].senderId);
              }}
            >
              <img
                src={recieved[j].senderPP}
                alt={recieved[j].senderUsername}
              />
              <div className="messageDetail">
                <p style={{ fontSize: "14px" }}>{recieved[j].senderUsername}</p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(10,10,10,0.3)",
                    fontWeight: "light",
                    paddingTop: "2px",
                  }}
                >
                  {"Recieved"}
                </p>
              </div>
            </div>
          );
        }
      }
    }
    if (alreadySentOrRecieved.indexOf(sent[i].recipientId) < 0) {
      alreadySentOrRecieved.push(sent[i].recipientId);
      allData.push(
        <div
          key={sent[i].createdAt}
          className="listOfMessagesDiv"
          onClick={() => {
            console.log("WORKSSSSSS");
            props.state.setMessageOpen(true);
            props.state.setUserClicked(sent[i].recipientId);
          }}
        >
          <img src={sent[i].recieverPP} alt={sent[i].recieverUsername} />
          <div className="messageDetail">
            <p style={{ fontSize: "14px" }}>{sent[i].recieverUsername}</p>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(10,10,10,0.3)",
                fontWeight: "light",
                paddingTop: "2px",
              }}
            >
              {"Sent Message"}
            </p>
          </div>
        </div>
      );
    }
  }
}
return allData;
