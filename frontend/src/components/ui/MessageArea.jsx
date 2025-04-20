import React, { useRef, useEffect } from "react";
import CreateMessage from "./CreateMessage";

const MessageArea = React.memo(({ messageList }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageList]);

  return (
    <div className="chart-bot-message-continer">
      {messageList.map((msg) => (
        <CreateMessage key={msg.timestamp}  currentMessage={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
});

export default MessageArea;
